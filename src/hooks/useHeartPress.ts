import Animated, { Easing, withSequence, withSpring, withTiming } from 'react-native-reanimated'
import { Dispatch, SetStateAction } from 'react'

export const useHeartPress = (
  isBgColored: boolean,
  setIsBgColored: Dispatch<SetStateAction<boolean>>,
  heartAnimation: Animated.SharedValue<number>,
  heartTransform: Animated.SharedValue<number>
) => {
  const heartPress = () => {
    if (isBgColored) {
      setIsBgColored(false)
      heartAnimation.value = 0

      heartTransform.value = withSequence(
        withTiming(0.8, { duration: 200 }),
        withSpring(1, { damping: 0.8, mass: 0.2 })
      )
    } else {
      setIsBgColored(true)
      heartAnimation.value = withTiming(1, {
        duration: 800,
        easing: Easing.bezier(0.12, 0, 0.39, 0).factory(),
      })

      heartTransform.value = withSequence(
        withTiming(0.8, { duration: 200 }),
        withSpring(1, { damping: 0.8, mass: 0.2 })
      )
    }
  }

  return { heartPress }
}
