import React from 'react'
import { AnimatedViewContainer, StyledAnimatedPath, StyledSvg } from './SingleFlyingHeart.styled'
import { useSharedValue } from 'react-native-reanimated'
import { UseFlyingHeartAnimatedStyle } from '../../../../hooks/useFlyingHeartAnimatedStyle'

interface Props {
  startCoords: any
  heartAnimation: any
}

export const SingleFlyingHeart = ({ startCoords, heartAnimation }: Props) => {
  const drawRandomCoord = (minNumber: number, maxNumber: number) => {
    const min = Math.ceil(minNumber)
    const max = Math.floor(maxNumber)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const randomXCoord = drawRandomCoord(-350, 350)
  const randomYCoord = drawRandomCoord(-800, -2800)
  const finalCoords = useSharedValue({ x: randomXCoord, y: randomYCoord })

  const { heartStyle } = UseFlyingHeartAnimatedStyle(finalCoords, startCoords, heartAnimation)

  return (
    <AnimatedViewContainer style={[heartStyle]}>
      <StyledSvg>
        <StyledAnimatedPath />
      </StyledSvg>
    </AnimatedViewContainer>
  )
}
