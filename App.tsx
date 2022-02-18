import React from 'react'
import { RootNavigator } from './src/navigation/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
