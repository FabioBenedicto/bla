import React from 'react'
import { AuthRoutes } from './src/routes/auth.routes'
import { AppRoutes } from './src/routes/app.routes'

import { NavigationContainer } from '@react-navigation/native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DarkThemeContextProvider } from './src/contexts/DarkThemeContext'
import { ToastProvider } from 'react-native-toast-notifications'
import { LoginScreen } from './src/screens/LoginScreen'
import { ProfileScreen } from './src/screens/ProfileScreen'
export default function App () {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <SafeAreaProvider>
      <ToastProvider
        placement='top'
        duration={3000}
      >
        <DarkThemeContextProvider>
          <NavigationContainer>
            <AppRoutes />
          </NavigationContainer>
        </DarkThemeContextProvider>
      </ToastProvider >
    </SafeAreaProvider>
  )
}
