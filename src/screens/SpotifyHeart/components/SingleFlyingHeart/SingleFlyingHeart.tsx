import React from 'react'
import { AnimatedViewContainer, StyledAnimatedPath, StyledSvg } from './SingleFlyingHeart.styled'
import { useFlyingHeartAnimatedStyle } from '../../../../hooks/useFlyingHeartAnimatedStyle'
import { drawRandomNumberInRange } from '../../utils'
import Animated from 'react-native-reanimated'
import { Coords } from '../../../../types/types'

interface Props {
  startCoords: Animated.SharedValue<Coords>
  heartAnimation: Animated.SharedValue<number>
  minValueX: number
  maxValueX: number
  index?: number
  heartRendersNumber: number
}

export const SingleFlyingHeart = ({
  startCoords,
  heartAnimation,
  minValueX,
  maxValueX,
  index,
  heartRendersNumber,
}: Props) => {
  const randomXCoord = drawRandomNumberInRange(minValueX, maxValueX)
  const randomYCoord = drawRandomNumberInRange(-120, -200)
  const finalCoords = { x: randomXCoord, y: randomYCoord }
  const heartSize = drawRandomNumberInRange(40, 50)

  const { heartStyle } = useFlyingHeartAnimatedStyle(
    finalCoords,
    startCoords,
    heartAnimation,
    index,
    heartRendersNumber
  )

  return (
    <AnimatedViewContainer style={[heartStyle]}>
      <StyledSvg heartSize={heartSize}>
        <StyledAnimatedPath heartSize={heartSize} />
      </StyledSvg>
    </AnimatedViewContainer>
  )
}
