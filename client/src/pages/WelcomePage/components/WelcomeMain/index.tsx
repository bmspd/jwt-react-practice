/* eslint-disable react-hooks/exhaustive-deps*/
import React, { useEffect, useState } from 'react'
import { WelcomeContentGrid, WelcomeMainContainer } from '../../styled-components'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { useActions } from '../../../../hooks/useAction'
import { useDidMount } from '../../../../hooks/useDidMount'
import { useNavigate } from 'react-router-dom'

const WelcomeMain = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const { userLogin } = useActions()
  const { isAuth } = useTypedSelector((state) => state.auth)
  const didMount = useDidMount()
  const navigate = useNavigate()

  useEffect(() => {
    if (!didMount && isAuth) navigate('/test')
  }, [isAuth])
  return (
    <WelcomeMainContainer>
      <WelcomeContentGrid container align='center' justifyContent='center' rowSpacing={2}>
        <Grid item xs={8}>
          <Typography variant='h4' component='h1' textAlign='center'>
            WelcomePage
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            size='small'
            id='login-name'
            label='Email or nickname'
            variant='outlined'
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size='small'
            id='login-password'
            label='Password'
            variant='outlined'
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <Button onClick={() => userLogin(name, password)} fullWidth variant={'contained'}>
            Log in
          </Button>
        </Grid>
      </WelcomeContentGrid>
    </WelcomeMainContainer>
  )
}

export default WelcomeMain
