import React, { useEffect, useState } from 'react'
import { Container, Grid, SvgIcon } from '@mui/material'
import { Diamond, KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
interface ICarouselProps {
  images: string[]
}
interface IStyledIconProps {
  side: 'left' | 'right'
}
const StyledIcon = styled('span')<IStyledIconProps>`
  svg {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
`
const Carousel: React.FC<ICarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0)
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'green',
        height: '100%',
        gap: '10px',
      }}
    >
      <Container
        sx={{
          width: '80%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'no-wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
        }}
      >
        <StyledIcon>
          <KeyboardArrowLeftRounded
            onClick={() => {
              const nextImage = currentImage === 0 ? images.length - 1 : currentImage - 1
              setCurrentImage(nextImage)
            }}
            fontSize='large'
          />
        </StyledIcon>
        <img src={images[currentImage]} width='100%' />
        <StyledIcon>
          <KeyboardArrowRightRounded
            onClick={() => {
              const nextImage = currentImage === images.length - 1 ? 0 : currentImage + 1
              setCurrentImage(nextImage)
            }}
            fontSize='large'
          />
        </StyledIcon>
      </Container>
      <Grid container justifyContent='center'>
        {images.map((image) => (
          <Diamond key={image} fontSize={'large'} sx={{ color: 'pink', cursor: 'pointer' }} />
        ))}
      </Grid>
    </Container>
  )
}

export default Carousel
