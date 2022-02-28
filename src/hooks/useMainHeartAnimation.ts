import {
  Easing,
  interpolateColor,
  useAnimatedProps,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'

export const useMainHeartAnimation = (bgColor: string) => {
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
    return { fill: fill }
  })

  return { animatedProps }
}
