import { interpolate, useAnimatedStyle } from 'react-native-reanimated'

export const useBouncingCirclesAnimatedStyle = (
  isBgColored: any,
  circleScale: any,
  circleScale2: any,
  circleOpacity: any
) => {
  const scaleBigCircle = useAnimatedStyle(() => {
    const opacity = interpolate(circleOpacity.value, [0, 1], [0, 1])

    if (isBgColored) {
      return {
        transform: [{ scale: circleScale.value }],
        opacity: opacity,
      }
    } else {
      return {}
    }
  })

  const scaleSmallCircle = useAnimatedStyle(() => {
    const opacity = interpolate(circleOpacity.value, [0, 1], [0, 1])

    if (isBgColored) {
      return {
        transform: [{ scale: circleScale2.value }],
        opacity: opacity,
      }
    } else {
      return {}
    }
  })

  return { scaleBigCircle, scaleSmallCircle }
}
