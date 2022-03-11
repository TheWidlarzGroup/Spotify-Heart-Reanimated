import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'

interface Props {
  borderWidth: number
}

export const AnimatedCircle = styled(Animated.View)<Props>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: ${(props) => props.borderWidth}px;
  border-color: ${({ theme }) => theme.colors.spotifyGreen};
  position: absolute;
  bottom: 43px;
`
