import { Dispatch } from 'redux'
import { IAuthAction } from '../types/auth'
import AuthService from '../../services/AuthService'
import { logInAction, logOutAction } from '../reducers/authReducer'

export const userLogin = (email: string, password: string) => async (dispatch: Dispatch<IAuthAction>) => {
  const response = await AuthService.login(email, password)
  localStorage.setItem('token', response.data.accessToken)
  dispatch(logInAction())
}

export const userLogout = () => async (dispatch: Dispatch<IAuthAction>) => {
  await AuthService.logout()
  localStorage.removeItem('token')
  dispatch(logOutAction())
}

export const registration = (email: string, password: string) => async (dispatch: Dispatch<IAuthAction>) => {
  const response = await AuthService.registration(email, password)
  localStorage.setItem('token', response.data.accessToken)
  dispatch(logInAction())
}
