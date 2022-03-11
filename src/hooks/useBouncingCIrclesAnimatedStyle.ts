import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'

export const useBouncingCirclesAnimatedStyle = (
  heartAnimation: Animated.SharedValue<number>,
  isBgColored: boolean
) => {
  const animateBigCircle = useAnimatedStyle(() => {
    const opacity = interpolate(heartAnimation.value, [0, 1], [1, 0])
    const scale = interpolate(heartAnimation.value, [0, 1], [0, 5])

    if (isBgColored) {
      return {
        transform: [{ scale: scale }],
        opacity: opacity,
      }
    } else {
      return {}
    }
  })

  const animateSmallCircle = useAnimatedStyle(() => {
    const opacity = interpolate(heartAnimation.value, [0, 1], [1, 0])
    const scale = interpolate(heartAnimation.value, [0, 1], [0, 4])

    if (isBgColored) {
      return {
        transform: [{ scale: scale }],
        opacity: opacity,
      }
    } else {
      return {}
    }
  })

  return { animateBigCircle, animateSmallCircle }
}
