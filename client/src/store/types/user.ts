export enum UserActionTypes {
  SET_USERNAME = 'SET_USERNAME',
  GET_USERS = 'GET_USERS',
  ASYNC_GET_USERS = 'ASYNC_GET_USERS',
}

export interface IUserState {
  userName: string
  users: any[]
}

interface ISetUserNameAction {
  type: UserActionTypes.SET_USERNAME
  payload: string
}
interface IGetUsersAction {
  type: typeof UserActionTypes.GET_USERS
  payload: any[]
}
interface IGetAsyncUsersAction {
  type: UserActionTypes.ASYNC_GET_USERS
}

export type IUserAction = ISetUserNameAction | IGetUsersAction | IGetAsyncUsersAction
