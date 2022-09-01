import { Dispatch } from 'redux'
import { getUsersAction } from '../reducers/userReducer'
import { IUserAction } from '../types/user'

export const fetchUsers = () => (dispatch: Dispatch<IUserAction>) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispatch(getUsersAction(json)))
  }
