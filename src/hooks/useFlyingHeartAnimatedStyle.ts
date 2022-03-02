import { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated'

export const UseFlyingHeartAnimatedStyle = (
  finalCoords: any,
  startCoords: any,
  heartAnimation: any,
  index = 0,
  heartRendersNumber: number
) => {
  const calcBezier = (interpolatedValue: any, p0: any, p1: any, p2: any) => {
    'worklet'

    return Math.round(
      Math.pow(1 - interpolatedValue, 2) * p0 +
        2 * (1 - interpolatedValue) * interpolatedValue * p1 +
        Math.pow(interpolatedValue, 2) * 1.3 * p2
    )
  }

  const rangeChunk = 1 / (heartRendersNumber + 1)

  const heartStyle = useAnimatedStyle(() => {
    const destination = finalCoords
    const start = startCoords.value
    const input = [rangeChunk * index, rangeChunk * (index + 1), rangeChunk * (index + 2)]

    const animatedPositionY = interpolate(heartAnimation.value, input, [0, 0.5, 0.8], {
      extrapolateLeft: Extrapolation.CLAMP,
      extrapolateRight: Extrapolation.CLAMP,
    })

    const translateX = calcBezier(animatedPositionY, start.x, destination.x, destination.x)
    const translateY = calcBezier(animatedPositionY, start.y, start.y, destination.y)
    const opacity = interpolate(heartAnimation.value, input, [0, 0.9, 0])
    const scale = interpolate(heartAnimation.value, input, [0, 1.3, 0])

    return {
      transform: [{ translateX }, { translateY }, { scale }],
      opacity: opacity,
    }
  })

  return { heartStyle }
}
