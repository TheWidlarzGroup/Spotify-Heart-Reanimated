import React from 'react'
import { AnimatedViewContainer, StyledAnimatedPath, StyledSvg } from './SingleFlyingHeart.styled'
import { useSharedValue } from 'react-native-reanimated'
import { UseFlyingHeartAnimatedStyle } from '../../../../hooks/useFlyingHeartAnimatedStyle'
import { drawRandomNumberInRange } from '../../utils'

interface Props {
  startCoords: any
  heartAnimation: any
  minValueX: number
  maxValueX: number
}

export const SingleFlyingHeart = ({ startCoords, heartAnimation, minValueX, maxValueX }: Props) => {
  const randomXCoord = drawRandomNumberInRange(minValueX, maxValueX)
  const randomYCoord = drawRandomNumberInRange(-800, -8500)
  const finalCoords = useSharedValue({ x: randomXCoord, y: randomYCoord })
  const heartSize = drawRandomNumberInRange(30, 40)

  const { heartStyle } = UseFlyingHeartAnimatedStyle(finalCoords, startCoords, heartAnimation)

  return (
    <AnimatedViewContainer style={[heartStyle]}>
      <StyledSvg heartSize={heartSize}>
        <StyledAnimatedPath heartSize={heartSize} />
      </StyledSvg>
    </AnimatedViewContainer>
  )
}
