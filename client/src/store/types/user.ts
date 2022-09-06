export enum UserActionTypes {
  SET_USERNAME = 'SET_USERNAME',
  GET_USERS = 'GET_USERS',
  LOAD_MORE_USERS = 'LOAD_MORE_USERS',
  ASYNC_GET_USERS = 'ASYNC_GET_USERS',
  ASYNC_LOAD_MORE_USERS = 'ASYNC_LOAD_MORE_USERS',
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

interface ILoadMoreUsersAction {
  type: UserActionTypes.LOAD_MORE_USERS
  payload: any[]
}
interface IGetAsyncUsersAction {
  type: UserActionTypes.ASYNC_GET_USERS
}
interface IAsyncLoadMoreUsersAction {
  type: UserActionTypes.ASYNC_LOAD_MORE_USERS
}

export type IUserAction =
  | IAsyncLoadMoreUsersAction
  | ILoadMoreUsersAction
  | ISetUserNameAction
  | IGetUsersAction
  | IGetAsyncUsersAction
