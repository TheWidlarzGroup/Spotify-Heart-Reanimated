import styled from 'styled-components/native'

export const StyledContainer = styled.View.attrs(() => ({
  pointerEvents: 'box-none',
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: ${({ theme }) => theme.spacing.l}px;
`
