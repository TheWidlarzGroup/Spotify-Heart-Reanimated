import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'

interface Props {
  borderRadius: number
}

export const AnimatedCircle = styled(Animated.View)<Props>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: ${(props) => props.borderRadius}px;
  border-color: #1db954;
  position: absolute;
  bottom: 43px;
`
