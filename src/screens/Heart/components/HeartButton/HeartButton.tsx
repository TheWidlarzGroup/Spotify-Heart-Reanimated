import React, { Dispatch, SetStateAction, useRef } from 'react'
import Animated, { useSharedValue } from 'react-native-reanimated'
import {
  ScaleViewContainer,
  ShakeViewContainer,
  StyledAnimatedPath,
  StyledHeartButton,
  StyledSvg,
} from './HeartButton.styled'
import { useMainHeartAnimation } from '../../../../hooks/useMainHeartAnimation'
import { useHeartPress } from '../../../../hooks/useHeartPress'

interface Props {
  isBgColored: boolean
  setIsBgColored: Dispatch<SetStateAction<boolean>>
  heartAnimation: Animated.SharedValue<number>
}

export const HeartButton = ({ isBgColored, setIsBgColored, heartAnimation }: Props) => {
  const heartRef = useRef<Animated.View>(null)
  const heartScale = useSharedValue<number>(1)
  const { animatedProps, scaleAnimatedStyle, shakeAnimatedStyle } = useMainHeartAnimation(
    isBgColored,
    heartScale
  )
  const { heartPress } = useHeartPress(
    isBgColored,
    setIsBgColored,
    heartRef,
    heartAnimation,
    heartScale
  )

  return (
    <StyledHeartButton onPress={heartPress}>
      <ShakeViewContainer ref={heartRef} style={[shakeAnimatedStyle]}>
        <ScaleViewContainer ref={heartRef} style={[scaleAnimatedStyle]}>
          <StyledSvg>
            <StyledAnimatedPath animatedProps={animatedProps} />
          </StyledSvg>
        </ScaleViewContainer>
      </ShakeViewContainer>
    </StyledHeartButton>
  )
}
