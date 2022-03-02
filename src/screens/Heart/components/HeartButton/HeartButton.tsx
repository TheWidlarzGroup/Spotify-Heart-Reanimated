import React from 'react'
import {
  Easing,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import {
  ScaleViewContainer,
  ShakeViewContainer,
  StyledAnimatedPath,
  StyledHeartButton,
  StyledSvg,
} from './HeartButton.styled'
import { useMainHeartAnimation } from '../../../../hooks/useMainHeartAnimation'

interface Props {
  heartRef: any
  isBgColored: any
  setIsBgColored: any
  startCoords: any
  heartAnimation: any
}

export const HeartButton = ({
  heartRef,
  isBgColored,
  setIsBgColored,
  startCoords,
  heartAnimation,
}: Props) => {
  const heartScale = useSharedValue(1)
  const { animatedProps, animatedStyle, animatedStyle2 } = useMainHeartAnimation(
    isBgColored,
    heartScale
  )

  const setHeartPosition = (x: any, y: any) => {
    startCoords.value = { x, y }
  }

  const handleHeartClick = () => {
    isBgColored ? setIsBgColored(false) : setIsBgColored(true)
    heartRef.current.measure((px: any, py: any) => {
      if (!isBgColored) {
        setHeartPosition(px, py)

        heartAnimation.value = withTiming(1, {
          duration: 1100,
          easing: Easing.bezier(0.12, 0, 0.39, 0).factory(),
        })

        heartScale.value = withSequence(
          withTiming(0.8, { duration: 200 }),
          withSpring(1, { damping: 0.8, mass: 0.2 })
        )
      } else {
        setHeartPosition(0, 0)
        heartAnimation.value = 0
        heartScale.value = withSequence(
          withTiming(0.8, { duration: 200 }),
          withSpring(1, { damping: 0.8, mass: 0.2 })
        )
      }
    })
  }

  return (
    <StyledHeartButton onPress={handleHeartClick}>
      <ShakeViewContainer ref={heartRef} style={[animatedStyle2]}>
        <ScaleViewContainer ref={heartRef} style={[animatedStyle]}>
          <StyledSvg>
            <StyledAnimatedPath animatedProps={animatedProps} />
          </StyledSvg>
        </ScaleViewContainer>
      </ShakeViewContainer>
    </StyledHeartButton>
  )
}
