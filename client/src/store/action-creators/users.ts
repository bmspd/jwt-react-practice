import { getUsersAction } from '../reducers/userReducer'
import { Dispatch } from 'redux'
import { IUserAction } from '../types/user'

export const fetchUsers = () => {
  return (dispatch: Dispatch<IUserAction>) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispatch(getUsersAction(json)))
  }
}
