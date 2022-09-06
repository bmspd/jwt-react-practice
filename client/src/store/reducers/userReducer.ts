import { IUserAction, IUserState, UserActionTypes } from '../types/user'

const initialState: IUserState = {
  userName: '',
  users: [],
}

export const userReducer = (state = initialState, action: IUserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.SET_USERNAME:
      return { ...state, userName: action.payload }
    case UserActionTypes.GET_USERS:
      return { ...state, users: [...action.payload] }
    case UserActionTypes.LOAD_MORE_USERS:
      return { ...state, users: [...state.users, ...action.payload] }
    default:
      return state
  }
}

export const setUserNameAction = (payload: string) => ({ type: UserActionTypes.SET_USERNAME, payload })
export const getUsersAction = (payload: any) => ({ type: UserActionTypes.GET_USERS, payload })
export const getAsyncUsersAction = () => ({ type: UserActionTypes.ASYNC_GET_USERS })
export const getMoreUsers = (payload: any) => ({ type: UserActionTypes.LOAD_MORE_USERS, payload })
export const getAsyncMoreUsersAction = () => ({ type: UserActionTypes.ASYNC_LOAD_MORE_USERS })
