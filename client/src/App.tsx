import React from 'react'
import { useDispatch } from 'react-redux'
import { logInAction, logOutAction } from './store/reducers/authReducer'
import { getAsyncUsersAction } from './store/reducers/userReducer'
import { useTypedSelector } from './hooks/useTypedSelector'
import { useActions } from './hooks/useAction'

function App() {
  const dispatch = useDispatch()
  const { fetchUsers } = useActions()
  const { isAuth } = useTypedSelector((state) => state.auth)
  const { users } = useTypedSelector((state) => state.user)

  const auth = () => {
    dispatch(logInAction({}))
  }
  const unAuth = () => {
    dispatch(logOutAction({}))
  }
  return (
    <div>
      <h1>Test</h1>
      <h1>{isAuth ? 'YES' : 'NO'}</h1>
      <button onClick={() => auth()}>LOG IN</button>
      <button onClick={() => unAuth()}>LOG OUT</button>
      <div>
        <button onClick={() => fetchUsers()}>GET THUNK USERS</button>
        <button onClick={() => dispatch(getAsyncUsersAction())}>SAGA GET USERS</button>
        {users.length ? users.map((el: any) => <div key={el.id}>{el.name}</div>) : <div>NO USERS</div>}
      </div>
    </div>
  )
}

export default App
