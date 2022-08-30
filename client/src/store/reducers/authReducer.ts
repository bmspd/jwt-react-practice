import { AuthActionTypes, IAuthAction, IAuthState } from '../types/auth'

const initialState: IAuthState = {
  isAuth: false,
}

export const authReducer = (state = initialState, action: IAuthAction) => {
  // action.payload !!!!
  switch (action.type) {
    case AuthActionTypes.LOG_IN:
      return { ...state, isAuth: true }
    case AuthActionTypes.LOG_OUT:
      return { ...state, isAuth: false }
    default:
      return state
  }
}

export const logInAction = () => ({ type: AuthActionTypes.LOG_IN })

export const logOutAction = () => ({ type: AuthActionTypes.LOG_OUT })
