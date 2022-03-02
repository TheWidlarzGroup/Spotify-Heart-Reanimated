import { Easing, withSequence, withSpring, withTiming } from 'react-native-reanimated'

export const useHeartPress = (
  isBgColored: any,
  setIsBgColored: any,
  heartRef: any,
  heartAnimation: any,
  bigCircleScale: any,
  smallCircleScale: any,
  circleOpacity: any,
  heartScale: any,
  startCoords: any
) => {
  const setHeartPosition = (x: any, y: any) => {
    startCoords.value = { x, y }
  }

  const heartPress = () => {
    isBgColored ? setIsBgColored(false) : setIsBgColored(true)
    heartRef.current.measure((px: any, py: any) => {
      if (!isBgColored) {
        setHeartPosition(px, py)

        heartAnimation.value = withTiming(1, {
          duration: 800,
          easing: Easing.bezier(0.12, 0, 0.39, 0).factory(),
        })

        bigCircleScale.value = withTiming(5, {
          duration: 800,
          easing: Easing.bezier(0.12, 0, 0.39, 0).factory(),
        })

        smallCircleScale.value = withTiming(4, {
          duration: 800,
          easing: Easing.bezier(0.12, 0, 0.39, 0).factory(),
        })

        circleOpacity.value = withTiming(0, {
          duration: 800,
          easing: Easing.bezier(0.12, 0, 0.39, 0).factory(),
        })

        heartScale.value = withSequence(
          withTiming(0.8, { duration: 200 }),
          withSpring(1, { damping: 0.8, mass: 0.2 })
        )
      } else {
        setHeartPosition(0, 0)
        heartAnimation.value = 0
        bigCircleScale.value = 0
        smallCircleScale.value = 0
        circleOpacity.value = 1
        heartScale.value = withSequence(
          withTiming(0.8, { duration: 200 }),
          withSpring(1, { damping: 0.8, mass: 0.2 })
        )
      }
    })
  }

  return { heartPress }
}
