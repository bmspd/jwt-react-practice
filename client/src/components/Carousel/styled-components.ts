import { styled } from '@mui/material/styles'
import { Container } from '@mui/material'

export const StyledIcon = styled('span')`
  svg {
    color: white;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
`
export const StyledMainContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 24px;
  padding: 12px;
  .carousel-enter {
    opacity: 0;
    transform: translateX(50%);
  }
  .carousel-exit {
    opacity: 1;
  }
  .carousel-enter-active {
    opacity: 1;
    transition: all 500ms;
    transform: translateX(0);
  }
  .carousel-exit-active {
    opacity: 0;
    transition: all 500ms;
    transform: translateX(-50%);
  }
`
export const ImageContainer = styled(Container)`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  .image-wrapper {
    width: 100%;
    aspect-ratio: 7/5;
    overflow: hidden;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      aspect-ratio: 7/5;
      border-radius: 16px;
    }
  }
`
