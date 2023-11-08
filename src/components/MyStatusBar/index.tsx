import React from 'react'
import { View } from 'react-native'

import { StatusBar, type StatusBarProps } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export interface MyStatusBarProps extends StatusBarProps {
  backgroundColor?: string
}

export function MyStatusBar ({ backgroundColor, ...props }: MyStatusBarProps) {
  // const statusBarHeight = useSafeAreaInsets().top
  return (
    <View style={{ backgroundColor }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
