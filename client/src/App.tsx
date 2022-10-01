import React, { ReactNode } from 'react'
import WelcomePage from './pages/WelcomePage'
import { CssBaseline } from '@mui/material'
import './styles.scss'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import PrivateRoute from './routes/components/PrivateRoute'
import ErrorBoundary from './routes/components/ErrorBoundary'
import Menu from './layouts/Menu'

interface RouteWithMenuProps {
  isPrivate: boolean
  children: ReactNode
}

const RouteWithMenu = ({ isPrivate, children }: RouteWithMenuProps) => {
  if (isPrivate)
    return (
      <PrivateRoute>
        <Menu>{children}</Menu>
      </PrivateRoute>
    )
  return <Menu>{children}</Menu>
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<WelcomePage />} />
        <Route
          path='test'
          element={
            <RouteWithMenu isPrivate={true}>
              <h1>Success!</h1>
            </RouteWithMenu>
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
