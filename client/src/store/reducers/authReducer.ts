const defaultState = {
  isAuth: false
}

const LOG_IN = "LOG_IN"
const LOG_OUT = "LOG_OUT"

export const authReducer = (state = defaultState, action:any) => {
  // action.payload !!!!
  switch (action.type) {
    case LOG_IN:
      return {...state, isAuth: true}
    case LOG_OUT:
      return {...state, isAuth: false}
    default:
      return state
  }
}

export const logInAction = (payload:any) => ({type: LOG_IN, payload})

export const logOutAction = (payload:any) => ({type: LOG_OUT, payload})