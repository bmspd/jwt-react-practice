export interface IAuthState {
  isAuth: boolean
}

export enum AuthActionTypes {
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT"
}

interface ILogInAction {
  type: AuthActionTypes.LOG_IN
}

interface ILogOutAction {
  type: AuthActionTypes.LOG_OUT
}

export type IAuthAction = ILogInAction | ILogOutAction