import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { Coords } from '../types/types'

export const useFlyingHeartAnimatedStyle = (
  finalCoords: Coords,
  startCoords: Animated.SharedValue<Coords>,
  heartAnimation: Animated.SharedValue<number>,
  index = 0,
  heartRendersNumber: number
) => {
  const calcBezierPoint = (
    interpolatedValue: number,
    point0: number,
    point1: number,
    point2: number
  ) => {
    'worklet'

    return Math.round(
      Math.pow(1 - interpolatedValue, 2) * point0 +
        2 * (1 - interpolatedValue) * interpolatedValue * point1 +
        Math.pow(interpolatedValue, 2) * 1.3 * point2
    )
  }

  const rangeChunk = 1 / (heartRendersNumber + 1)

  const heartStyle = useAnimatedStyle(() => {
    const destination: Coords = finalCoords
    const start: Coords = startCoords.value
    const input: number[] = [rangeChunk * index, rangeChunk * (index + 1), rangeChunk * (index + 2)]

    const animatedPosition = interpolate(heartAnimation.value, input, [0, 0.5, 0.8], {
      extrapolateLeft: Extrapolation.CLAMP,
      extrapolateRight: Extrapolation.CLAMP,
    })

    const translateX = calcBezierPoint(animatedPosition, start.x, destination.x, destination.x)
    const translateY = calcBezierPoint(animatedPosition, start.y, start.y, destination.y)
    const opacity = interpolate(heartAnimation.value, input, [0, 0.9, 0])
    const scale = interpolate(heartAnimation.value, input, [0, 1.3, 0])

    return {
      transform: [{ translateX }, { translateY }, { scale }],
      opacity: opacity,
    }
  })

  return { heartStyle }
}
