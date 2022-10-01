import React, { FC, memo } from 'react'
import { useRouteError } from 'react-router-dom'

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

export default ErrorBoundary
