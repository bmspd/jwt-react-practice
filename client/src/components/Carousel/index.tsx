import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { Diamond, KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@mui/icons-material'
import { StyledMainContainer, ImageContainer, StyledIcon } from './styled-components'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
interface ICarouselProps {
  images: string[]
}

const Carousel: React.FC<ICarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0)
  /* force to preload all images from carousel to avoid empty pictures */
  useEffect(() => {
    images.forEach((image) => {
      const preloadImage = new Image()
      preloadImage.src = image
    })
  })
  return (
    <StyledMainContainer disableGutters>
      <ImageContainer disableGutters>
        <StyledIcon>
          <KeyboardArrowLeftRounded
            onClick={() => {
              const nextImage = currentImage === 0 ? images.length - 1 : currentImage - 1
              setCurrentImage(nextImage)
            }}
            fontSize='large'
          />
        </StyledIcon>
        <div className='image-wrapper'>
          <SwitchTransition mode='out-in'>
            <CSSTransition
              key={images[currentImage]}
              addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
              classNames='carousel'
            >
              <img src={images[currentImage]} alt='carousel image' />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <StyledIcon>
          <KeyboardArrowRightRounded
            onClick={() => {
              const nextImage = currentImage === images.length - 1 ? 0 : currentImage + 1
              setCurrentImage(nextImage)
            }}
            fontSize='large'
          />
        </StyledIcon>
      </ImageContainer>
      <Grid container justifyContent='center'>
        {images.map((image, index) => (
          <Diamond
            key={image}
            fontSize='large'
            cursor='pointer'
            sx={{ color: index === currentImage ? 'pink' : 'white', transition: 'color 500ms' }}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </Grid>
    </StyledMainContainer>
  )
}

export default Carousel
