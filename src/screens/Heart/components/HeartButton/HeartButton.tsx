import React from 'react'
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated'
import {
  AnimatedViewContainer,
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
  const { animatedProps } = useMainHeartAnimation(isBgColored)
  const counting = useSharedValue(1)

  const setHeartPosition = (x: any, y: any) => {
    startCoords.value = { x, y }
  }

  const handleHeartClick = () => {
    isBgColored ? setIsBgColored(false) : setIsBgColored(true)
    heartRef.current.measure((px: any, py: any) => {
      setHeartPosition(px, py)

      counting.value = withTiming(
        0,
        {
          duration: 300,
          easing: Easing.bezier(0.11, 0, 0.5, 0).factory(),
        },
        () => {
          heartAnimation.value = withTiming(1, {
            duration: 3900,
            easing: Easing.bezier(0.12, 0, 0.39, 0).factory(),
          })
        }
      )
    })
  }

  return (
    <StyledHeartButton onPress={handleHeartClick}>
      <AnimatedViewContainer ref={heartRef}>
        <StyledSvg>
          <StyledAnimatedPath animatedProps={animatedProps} />
        </StyledSvg>
      </AnimatedViewContainer>
    </StyledHeartButton>
  )
}
