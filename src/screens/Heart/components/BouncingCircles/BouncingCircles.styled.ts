import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'

export const AnimatedViewContainer = styled(Animated.View)`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 0;
  bottom: 30px;
  background-color: pink;
`
