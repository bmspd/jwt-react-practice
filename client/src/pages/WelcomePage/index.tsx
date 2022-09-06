import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledButton = styled(Button)`
  color: black;
`

const WelcomePage: React.FC = () => {
  const test = 'a'
  return (
    <>
      <h1>WelcomePage</h1>
      <div>
        <StyledButton variant={'contained'}>Hello world</StyledButton>
      </div>
    </>
  )
}

export default WelcomePage
