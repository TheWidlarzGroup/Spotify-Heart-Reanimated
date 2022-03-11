import React from 'react'
import { AnimatedCircle } from './BouncingCircles.styled'
import { useBouncingCirclesAnimatedStyle } from '../../../../hooks/useBouncingCIrclesAnimatedStyle'
import Animated from 'react-native-reanimated'

interface Props {
  heartAnimation: Animated.SharedValue<number>
  isBgColored: boolean
}

export const BouncingCircles = ({ heartAnimation, isBgColored }: Props) => {
  const { scaleBigCircle, scaleSmallCircle } = useBouncingCirclesAnimatedStyle(
    heartAnimation,
    isBgColored
  )

  return (
    <>
      <AnimatedCircle borderWidth={1.5} style={[scaleBigCircle]} />
      <AnimatedCircle borderWidth={5} style={[scaleSmallCircle]} />
    </>
  )
}
