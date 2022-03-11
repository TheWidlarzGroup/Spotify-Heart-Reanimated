import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'
import { theme } from '../theme'

export const useMainHeartAnimation = (
  isBgColored: boolean,
  heartTransform: Animated.SharedValue<number>
) => {
  const progress = useDerivedValue(() => {
    return withTiming(isBgColored ? 0 : 1, {
      duration: 400,
      easing: Easing.bezier(0.65, 0, 0.35, 1).factory(),
    })
  })

  const animatedProps = useAnimatedProps(() => {
    const fill = interpolateColor(
      progress.value,
      [0, 1],
      [theme.colors.spotifyGreen, theme.colors.backgroundColor],
      'RGB'
    )
    const stroke = interpolateColor(
      progress.value,
      [0, 1],
      [theme.colors.spotifyGreen, theme.colors.whiteBorder],
      'RGB'
    )
    return { fill: fill, stroke: stroke }
  })

  const scaleAnimatedStyle = useAnimatedStyle(() => {
    if (isBgColored) {
      return {
        transform: [{ scale: heartTransform.value }],
      }
    } else {
      return {}
    }
  })

  const shakeAnimatedStyle = useAnimatedStyle(() => {
    if (!isBgColored) {
      return {
        transform: [
          {
            rotate:
              interpolate(
                heartTransform.value,
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
