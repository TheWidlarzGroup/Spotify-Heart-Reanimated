import { Easing, withSequence, withSpring, withTiming } from 'react-native-reanimated'

export const useHeartPress = (
  isBgColored: any,
  setIsBgColored: any,
  heartRef: any,
  heartAnimation: any,
  heartScale: any,
  startCoords: any
) => {
  const setHeartPosition = (x: any, y: any) => {
    startCoords.value = { x, y }
  }

  const heartPress = () => {
    heartRef.current.measure((px: any, py: any) => {
      if (isBgColored) {
        setIsBgColored(false)
        setHeartPosition(0, 0)
        heartAnimation.value = 0
      } else {
        setIsBgColored(true)
        setHeartPosition(px, py)

        heartAnimation.value = withTiming(1, {
          duration: 800,
          easing: Easing.bezier(0.12, 0, 0.39, 0).factory(),
        })
      }

      heartScale.value = withSequence(
        withTiming(0.8, { duration: 200 }),
        withSpring(1, { damping: 0.8, mass: 0.2 })
      )
    })
  }

  return { heartPress }
}
