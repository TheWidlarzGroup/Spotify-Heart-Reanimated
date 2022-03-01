import { interpolate, useAnimatedStyle } from 'react-native-reanimated'

export const UseFlyingHeartAnimatedStyle = (
  finalCoords: any,
  startCoords: any,
  heartAnimation: any,
  index: number
) => {
  const calcBezier = (interpolatedValue: any, p0: any, p1: any, p2: any) => {
    'worklet'

    return Math.round(
      Math.pow(1 - interpolatedValue, 2) * p0 +
        2 * (1 - interpolatedValue) * interpolatedValue * p1 +
        Math.pow(interpolatedValue, 2) * 1.3 * p2
    )
  }

  const heartStyle = useAnimatedStyle(() => {
    const cart = finalCoords.value
    const ball = startCoords.value

    const translateX = calcBezier(heartAnimation.value, ball.x, cart.x, cart.x)
    const translateY = calcBezier(heartAnimation.value, ball.y, ball.y, cart.y)
    const opacity = interpolate(
      heartAnimation.value,
      [0, 0.2, 1, 0, 0, 0, 0],
      [0.2, 0.4, 0.6, 0.2, 0.2, 0.2, 0.2]
    )

    return {
      transform: [{ translateX }, { translateY }],
      opacity: opacity,
    }
  })

  return { heartStyle }
}
