import React, { Dispatch, SetStateAction } from 'react'
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
  const heartTransform = useSharedValue<number>(1)
  const { animatedProps, scaleAnimatedStyle, shakeAnimatedStyle } = useMainHeartAnimation(
    isBgColored,
    heartTransform
  )
  const { heartPress } = useHeartPress(isBgColored, setIsBgColored, heartAnimation, heartTransform)

  return (
    <StyledHeartButton onPress={heartPress}>
      <ShakeViewContainer style={[shakeAnimatedStyle]}>
        <ScaleViewContainer style={[scaleAnimatedStyle]}>
          <StyledSvg>
            <StyledAnimatedPath animatedProps={animatedProps} />
          </StyledSvg>
        </ScaleViewContainer>
      </ShakeViewContainer>
    </StyledHeartButton>
  )
}
