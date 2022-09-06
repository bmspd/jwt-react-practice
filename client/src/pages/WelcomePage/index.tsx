import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import './styles.scss'
const StyledButton = styled(Button)`
  background-color: red;
`
const WelcomeContainer = styled(Container)`
  background-color: pink;
  max-width: 1500px;
  border-radius: 16px;
  padding: 12px;
  width: 100%;
`
const WelcomePage: React.FC = () => {
  const test = 'a'
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: '100vh', padding: '0 4rem' }}
    >
      <WelcomeContainer>
        <Grid container>
          <Grid className='welcome-image-container' item xs={6}></Grid>
          <Grid item xs={6}>
            <Typography variant='h4' component='h1'>
              WelcomePage
            </Typography>
            <div>
              <StyledButton variant={'contained'}>Hello world</StyledButton>
            </div>
          </Grid>
        </Grid>
      </WelcomeContainer>
    </Grid>
  )
}

export default WelcomePage
