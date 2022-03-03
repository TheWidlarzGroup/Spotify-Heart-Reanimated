import React from 'react'
import { AnimatedViewContainer, StyledAnimatedPath, StyledSvg } from './SingleFlyingHeart.styled'
import { UseFlyingHeartAnimatedStyle } from '../../../../hooks/useFlyingHeartAnimatedStyle'
import { drawRandomNumberInRange } from '../../utils'

interface Props {
  startCoords: any
  heartAnimation: any
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

  const { heartStyle } = UseFlyingHeartAnimatedStyle(
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
