import mongoose from "mongoose";
const {Schema, model} = mongoose

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    nickname: {type: String, unique: true, required: false, default: null}
})

const userModel = model('User', UserSchema)

export default userModel