import {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'

export const useMainHeartAnimation = (bgColor: boolean, heartScale: any) => {
  const progress = useDerivedValue(() => {
    return withTiming(!bgColor ? 1 : 0, {
      duration: 400,
      easing: Easing.bezier(0.65, 0, 0.35, 1).factory(),
    })
  })

  const animatedProps = useAnimatedProps(() => {
    const fill = interpolateColor(
      progress.value,
      [0, 1],
      ['rgba(29, 185, 84, 1)', 'rgba(0, 0, 0, 1)'],
      'RGB'
    )
    const stroke = interpolateColor(
      progress.value,
      [0, 1],
      ['rgba(29, 185, 84, 1)', 'rgba(255, 255, 255, 1)'],
      'RGB'
    )
    return { fill: fill, stroke: stroke }
  })

  const scaleAnimatedStyle = useAnimatedStyle(() => {
    if (bgColor) {
      return {
        transform: [{ scale: heartScale.value }],
      }
    } else {
      return {}
    }
  })

  const shakeAnimatedStyle = useAnimatedStyle(() => {
    if (!bgColor) {
      return {
        transform: [
          {
            rotate:
              interpolate(
                heartScale.value,
                [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
                [0, -25, 0, 25, 0, 25, 0, -25, 0]
              ) + 'deg',
          },
        ],
      }
    } else {
      return {}
    }
  })

  return { animatedProps, scaleAnimatedStyle, shakeAnimatedStyle }
}
