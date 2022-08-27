const defaultState = {
  userName: '',
  users: [],
}

const SET_USERNAME = "SET_USERNAME"
const GET_USERS = "GET_USERS"

export const userReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_USERNAME:
      return {...state, userName: action.payload}
    case GET_USERS:
      return {...state, users: [...action.payload]}
    default:
      return state
  }
}

export const setUserNameAction = (payload:any) => ({type: SET_USERNAME, payload})
export const getUsersAction = (payload:any) => ({type: GET_USERS, payload})