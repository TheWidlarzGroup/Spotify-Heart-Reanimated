import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width: screenWidth } = Dimensions.get('window')

const aspectRatio = 722 / 368
const CARD_WIDTH = screenWidth - 128
const CARD_HEIGHT = CARD_WIDTH * aspectRatio

export const StyledContainer = styled.View.attrs(() => ({
  pointerEvents: 'box-none',
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: ${({ theme }) => theme.spacing.l}px;
`
