import {getUsersAction} from "../store/reducers/userReducer";

export const fetchUsers = () => {
  return (dispatch: any) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(getUsersAction(json)))
  }
}