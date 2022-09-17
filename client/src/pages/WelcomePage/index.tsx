import React from 'react'
import { Grid } from '@mui/material'
import { WelcomeContainer, WelcomePageContainer, WelcomeImageGrid } from './styled-components'
import image1 from '../../assets/img/carousel/abstract-1.jpg'
import image2 from '../../assets/img/carousel/abstract-2.jpg'
import image3 from '../../assets/img/carousel/abstract-3.jpg'
import './styles.scss'
import Carousel from '../../components/Carousel'
import WelcomeMain from './components/WelcomeMain'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const WelcomePage: React.FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth)
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
            <Grid item xs={6} justifyContent='center' className='welcome-main-container'>
              <WelcomeMain />
            </Grid>
          </Grid>
        </WelcomeContainer>
        <h1 style={{ color: 'white' }}>Login status: {isAuth ? 'Logged' : 'Nope'}</h1>
      </Grid>
    </WelcomePageContainer>
  )
}

export default WelcomePage
