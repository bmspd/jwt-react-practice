import { styled } from '@mui/material/styles'
import { Container, Grid } from '@mui/material'
import backgroundPattern from '../../assets/img/background-pattern.jpg'

export const WelcomeImageGrid = styled(Grid)`
  background: linear-gradient(
    180deg,
    rgba(16, 45, 75, 1) 0%,
    rgba(81, 124, 170, 1) 55%,
    rgba(178, 201, 228, 1) 84%,
    rgba(255, 255, 255, 0.4) 100%
  );
`
export const WelcomeMainContainer = styled(Container)`
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    rgba(109, 89, 122, 1) 0%,
    rgba(153, 110, 181, 1) 50%,
    rgba(229, 197, 250, 1) 81%,
    rgba(255, 255, 255, 0.4) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`
export const WelcomeContentGrid = styled(Grid)`
  background-color: white;
  width: 80%;
  padding: 12px;
  border-radius: 12px;
`
export const WelcomePageContainer = styled(Container)`
  background-image: url(${backgroundPattern});
  background-size: 400px auto;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0.85);
`
export const WelcomeContainer = styled(Container)`
  background-color: white;
  max-width: 1500px;
  max-height: 900px;
  border-radius: 16px;
  aspect-ratio: 7 / 4;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  overflow: hidden;
  border-top: 2px solid gray;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 5px, rgba(255, 255, 255, 0.3) 0px 10px, rgba(255, 255, 255, 0.2) 0px 15px,
    rgba(255, 255, 255, 0.1) 0px 20px, rgba(255, 255, 255, 0.05) 0px 25px;
`
