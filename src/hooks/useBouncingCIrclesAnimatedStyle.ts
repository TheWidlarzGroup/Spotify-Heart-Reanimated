import { interpolate, useAnimatedStyle } from 'react-native-reanimated'

export const useBouncingCirclesAnimatedStyle = (heartAnimation: any, isBgColored: any) => {
  const scaleBigCircle = useAnimatedStyle(() => {
    const opacity = interpolate(heartAnimation.value, [0, 1], [1, 0])

    if (isBgColored) {
      return {
        transform: [{ scale: interpolate(heartAnimation.value, [0, 1], [0, 5]) }],
        opacity: opacity,
      }
    } else {
      return {}
    }
  })

  const scaleSmallCircle = useAnimatedStyle(() => {
    const opacity = interpolate(heartAnimation.value, [0, 1], [1, 0])

    if (isBgColored) {
      return {
        transform: [{ scale: interpolate(heartAnimation.value, [0, 1], [0, 4]) }],
        opacity: opacity,
      }
    } else {
      return {}
    }
  })

  return { scaleBigCircle, scaleSmallCircle }
}
