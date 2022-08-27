import {IUserAction, IUserState, UserActionTypes} from "../types/user";

const initialState: IUserState = {
  userName: '',
  users: [],
}

export const userReducer = (state = initialState, action: IUserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.SET_USERNAME:
      return {...state, userName: action.payload}
    case UserActionTypes.GET_USERS:
      return {...state, users: [...action.payload]}
    default:
      return state
  }
}

export const setUserNameAction = (payload:any) => ({type: UserActionTypes.SET_USERNAME, payload})
export const getUsersAction = (payload:any) => ({type: UserActionTypes.GET_USERS, payload})
export const getAsyncUsersAction = () => ({type: UserActionTypes.ASYNC_GET_USERS})