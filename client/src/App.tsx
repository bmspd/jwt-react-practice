import React from 'react'
import { useDispatch } from 'react-redux'
import { logInAction, logOutAction } from './store/reducers/authReducer'
import { getAsyncMoreUsersAction, getAsyncUsersAction } from './store/reducers/userReducer'
import { useTypedSelector } from './hooks/useTypedSelector'
import { useActions } from './hooks/useAction'
import WelcomePage from './pages/WelcomePage'
import { CssBaseline } from '@mui/material'
import './styles.scss'
function App() {
  const dispatch = useDispatch()
  const { fetchUsers, userLogin, userLogout } = useActions()
  const { isAuth } = useTypedSelector((state) => state.auth)
  const { users } = useTypedSelector((state) => state.user)

  return (
    <div>
      <CssBaseline />
      <WelcomePage />
      {/* <h1>Test</h1>
      <h1>{isAuth ? 'YES' : 'NO'}</h1>
      <button onClick={() => userLogin('my_spid1@mail.ru', '1234')}>LOG IN</button>
      <button onClick={() => userLogout()}>LOG OUT</button>
      <div>
        <button onClick={() => fetchUsers()}>GET THUNK USERS</button>
        <button onClick={() => dispatch(getAsyncUsersAction())}>SAGA GET USERS</button>
        <button onClick={() => dispatch(getAsyncMoreUsersAction())}>SAGA GET MORE USERS</button>
        {users.length ? users.map((el: any) => <div key={el.id}>{el.name}</div>) : <div>NO USERS</div>}
      </div>*/}
    </div>
  )
}

export default App
