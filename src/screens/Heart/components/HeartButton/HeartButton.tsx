import React, { useRef } from 'react'
import { useSharedValue } from 'react-native-reanimated'
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
  isBgColored: any
  setIsBgColored: any
  startCoords: any
  heartAnimation: any
}

export const HeartButton = ({
  isBgColored,
  setIsBgColored,
  startCoords,
  heartAnimation,
}: Props) => {
  const heartRef = useRef<any>(null)
  const heartScale = useSharedValue(1)
  const { animatedProps, scaleAnimatedStyle, shakeAnimatedStyle } = useMainHeartAnimation(
    isBgColored,
    heartScale
  )
  const { heartPress } = useHeartPress(
    isBgColored,
    setIsBgColored,
    heartRef,
    heartAnimation,
    heartScale,
    startCoords
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
