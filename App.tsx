import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/theme'
import { SpotifyHeart } from './src/screens/Heart/SpotifyHeart'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SpotifyHeart />
    </ThemeProvider>
  )
}

export default App
