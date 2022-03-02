import React from 'react'
import { AnimatedCircle } from './BouncingCircles.styled'
import { useBouncingCirclesAnimatedStyle } from '../../../../hooks/useBouncingCIrclesAnimatedStyle'

interface Props {
  isBgColored: any
  bigCircleScale: any
  smallCircleScale: any
  circleOpacity: any
}

export const BouncingCircles = ({
  isBgColored,
  bigCircleScale,
  smallCircleScale,
  circleOpacity,
}: Props) => {
  const { scaleBigCircle, scaleSmallCircle } = useBouncingCirclesAnimatedStyle(
    isBgColored,
    bigCircleScale,
    smallCircleScale,
    circleOpacity
  )

  return (
    <>
      <AnimatedCircle borderRadius={1.5} style={[scaleBigCircle]} />
      <AnimatedCircle borderRadius={5} style={[scaleSmallCircle]} />
    </>
  )
}
