import React from 'react'
import { AnimatedCircle } from './BouncingCircles.styled'
import { useBouncingCirclesAnimatedStyle } from '../../../../hooks/useBouncingCIrclesAnimatedStyle'

interface Props {
  heartAnimation: any
  isBgColored: any
}

export const BouncingCircles = ({ heartAnimation, isBgColored }: Props) => {
  const { scaleBigCircle, scaleSmallCircle } = useBouncingCirclesAnimatedStyle(
    heartAnimation,
    isBgColored
  )

  return (
    <>
      <AnimatedCircle borderRadius={1.5} style={[scaleBigCircle]} />
      <AnimatedCircle borderRadius={5} style={[scaleSmallCircle]} />
    </>
  )
}
