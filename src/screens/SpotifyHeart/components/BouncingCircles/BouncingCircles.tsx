import React from 'react'
import { AnimatedCircle } from './BouncingCircles.styled'
import { useBouncingCirclesAnimatedStyle } from '../../../../hooks/useBouncingCIrclesAnimatedStyle'
import Animated from 'react-native-reanimated'

interface Props {
  heartAnimation: Animated.SharedValue<number>
  isBgColored: boolean
}

export const BouncingCircles = ({ heartAnimation, isBgColored }: Props) => {
  const { animateBigCircle, animateSmallCircle } = useBouncingCirclesAnimatedStyle(
    heartAnimation,
    isBgColored
  )

  return (
    <>
      <AnimatedCircle borderWidth={1.5} style={[animateBigCircle]} />
      <AnimatedCircle borderWidth={5} style={[animateSmallCircle]} />
    </>
  )
}
