import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProfileScreen } from '../screens/ProfileScreen'

import { DARK } from '../themes/dark'
import { LIGHT } from '../themes/light'

import useDarkTheme from '../hooks/useDarkTheme'

export type AppStackParamList = {
  ProfileScreen: undefined
}

const AppStack = createNativeStackNavigator<AppStackParamList>()

export function AppRoutes () {
  const { darkTheme } = useDarkTheme()
  return (
        <AppStack.Navigator
            initialRouteName='ProfileScreen'
            screenOptions={{
              headerShown: false,
              animation: 'none',
              contentStyle: {
                backgroundColor: darkTheme
                  ? DARK.COLORS.BACKGROUND
                  : LIGHT.COLORS.BACKGROUND
              }
            }}
        >
        <AppStack.Screen name="ProfileScreen" component={ProfileScreen} />
      </AppStack.Navigator>
  )
}
