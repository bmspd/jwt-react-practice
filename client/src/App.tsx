import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logInAction, logOutAction} from "./store/reducers/authReducer";
import {fetchUsers} from "./asyncActions/users";

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector((state:any) => state.auth.isAuth)
  const users = useSelector((state: any) => state.user.users)

  const auth = () => {
    dispatch(logInAction({}))
  }
  const unAuth = () => {
    dispatch(logOutAction({}))
  }
  return (
    <div>
      <h1>Test</h1>
      <h1>{isAuth ? 'YES': 'NO'}</h1>
      <button onClick={() => auth()}>LOG IN</button>
      <button onClick={() => unAuth()}>LOG OUT</button>
      <div>
        {/*@ts-ignore*/}
        <button onClick={() => dispatch(fetchUsers())}>GET USERS</button>
        {users.length ? users.map((el:any) => <div>{el.name}</div>) : <div>NO USERS</div>}
      </div>
    </div>
  );
}

export default App;
