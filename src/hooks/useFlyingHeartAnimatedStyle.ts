import { useAnimatedStyle } from 'react-native-reanimated'

export const UseFlyingHeartAnimatedStyle = (
  finalCoords: any,
  startCoords: any,
  heartAnimation: any
) => {
  const calcBezier = (interpolatedValue: any, p0: any, p1: any, p2: any) => {
    'worklet'

    return Math.round(
      Math.pow(1 - interpolatedValue, 2) * p0 +
        2 * (1 - interpolatedValue) * interpolatedValue * p1 +
        Math.pow(interpolatedValue, 2) * p2
    )
  }

  const heartStyle = useAnimatedStyle(() => {
    const cart = finalCoords.value
    const ball = startCoords.value

    const translateX = calcBezier(heartAnimation.value, ball.x, cart.x, cart.x)
    const translateY = calcBezier(heartAnimation.value, ball.y, ball.y, cart.y)

    return {
      transform: [{ translateX }, { translateY }],
    }
  })

  return { heartStyle }
}
