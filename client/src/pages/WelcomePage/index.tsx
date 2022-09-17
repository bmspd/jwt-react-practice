import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { WelcomeContainer, WelcomePageContainer, WelcomeImageGrid, WelcomeContentGrid } from './styled-components'
import image1 from '../../assets/img/carousel/abstract-1.jpg'
import image2 from '../../assets/img/carousel/abstract-2.jpg'
import image3 from '../../assets/img/carousel/abstract-3.jpg'
import './styles.scss'
import Carousel from '../../components/Carousel'

const WelcomePage: React.FC = () => {
  const test = 'a'
  return (
    <WelcomePageContainer maxWidth={false}>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '100vh', width: '80%', margin: 'auto' }}
      >
        <WelcomeContainer>
          <Grid container style={{ height: '100%' }}>
            <WelcomeImageGrid className='welcome-image-container' item xs={6}>
              <Carousel images={[image1, image2, image3]} />
            </WelcomeImageGrid>
            <Grid item xs={6} className='welcome-main-container'>
              <WelcomeContentGrid container direction='column' alignItems='center' justifyContent='center'>
                <Typography variant='h4' component='h1'>
                  WelcomePage
                </Typography>
                <div>
                  <Button variant={'contained'}>Hello world</Button>
                </div>
              </WelcomeContentGrid>
            </Grid>
          </Grid>
        </WelcomeContainer>
      </Grid>
    </WelcomePageContainer>
  )
}

export default WelcomePage
