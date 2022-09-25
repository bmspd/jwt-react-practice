import React, { FC, memo } from 'react'
import { useTypedSelector } from './hooks/useTypedSelector'
import WelcomePage from './pages/WelcomePage'
import { CssBaseline } from '@mui/material'
import './styles.scss'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useRouteError } from 'react-router-dom'
interface ErrorBoundaryProps {
  code?: number
  message?: string
}

const ErrorBoundary: FC<ErrorBoundaryProps> = memo(({ code, message }) => {
  const error = useRouteError()
  if (!code && !message) return <h1>DEFAULT ERROR BOUNDARY</h1>
  return (
    <div>
      <h1>ERROR BOUNDARY!!!</h1>
      <h2>
        {code}: {message}
      </h2>
    </div>
  )
})
const PrivateRoute = ({ children }: { children: React.ReactElement }) => {
  const { isAuth } = useTypedSelector((state) => state.auth)
  if (!isAuth) return <ErrorBoundary code={401} message='Unauthorized!' />
  return children
}
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<WelcomePage />} />
        <Route
          path='test'
          element={
            <PrivateRoute>
              <h1>Success!</h1>
            </PrivateRoute>
          }
          errorElement={<ErrorBoundary />}
        />
        <Route path='error' element={<h1>No Access</h1>} />
        <Route path='*' element={<ErrorBoundary code={404} message='NOT FOUND!' />} />
      </Route>,
    ),
  )
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  )
}

export default App

/* <h1>Test</h1>
      <h1>{isAuth ? 'YES' : 'NO'}</h1>
      <button onClick={() => userLogin('my_spid1@mail.ru', '1234')}>LOG IN</button>
      <button onClick={() => userLogout()}>LOG OUT</button>
      <div>
        <button onClick={() => fetchUsers()}>GET THUNK USERS</button>
        <button onClick={() => dispatch(getAsyncUsersAction())}>SAGA GET USERS</button>
        <button onClick={() => dispatch(getAsyncMoreUsersAction())}>SAGA GET MORE USERS</button>
        {users.length ? users.map((el: any) => <div key={el.id}>{el.name}</div>) : <div>NO USERS</div>}
      </div>*/
