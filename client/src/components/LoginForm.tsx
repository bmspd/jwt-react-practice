import React, { FC, useState } from 'react'

const LoginForm: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} value={email} type='text' placeholder='Email' />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Password' />
      <button>Log in</button>
      <button>Sign up</button>
    </div>
  )
}

export default LoginForm
