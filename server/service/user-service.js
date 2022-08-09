import UserModel from '../models/user-model.js'
import bcrypt from 'bcrypt'
import {v4} from 'uuid'
import mailService from "./mail-service.js";
import tokenService from "./token-service.js";
import UserDto from "../dtos/user-dto.js";
import ApiError from "../exceptions/api-error.js";

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`User with email ${email} already exists!` )
        }
        // хэширование работает только в одну сторону - расхэшировать нельзя
        const hashPassword = await bcrypt.hash(password, 3)
        // генерация ссылки для активации, можно было взять захэшированный пароль
        const activationLink = v4()
        // создание нового пользователя
        const user = await UserModel.create({email, password: hashPassword, activationLink})
        // отправка письма для подтверждения регистрации
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

        const userDto = new UserDto(user) // => id, email, isActivated
        // генерация токенов
        const tokens = tokenService.generateTokens({...userDto})
        // сохранение токенов в базу данных
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: UserDto
        }
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink})
        if (!user) {
            throw ApiError.BadRequest('Invalid activation link')
        }
        user.isActivated = true
        await user.save()
    }
}

const UserServiceObject = new UserService()

export default UserServiceObject