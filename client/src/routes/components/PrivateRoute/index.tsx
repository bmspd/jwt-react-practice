import React, { ReactNode } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import ErrorBoundary from '../ErrorBoundary'

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useTypedSelector((state) => state.auth)
  if (!isAuth) return <ErrorBoundary code={401} message='Unauthorized!' />
  return <>{children}</>
}

export default PrivateRoute
