import React from 'react'
import { ActivityIndicator, Pressable, type PressableProps, Text, View } from 'react-native'
import { styles } from './styles'
import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

export interface MyButtonProps extends PressableProps {
  text?: string
  loading?: boolean
  darkTheme?: boolean
}

export function MyButton ({ text, loading, darkTheme, ...props }: MyButtonProps) {
  const getBackgroundColor = () => {
    if (loading) {
      return darkTheme ? DARK.COLORS.BUTTON_LOADING_BACKGROUND : LIGHT.COLORS.BUTTON_LOADING_BACKGROUND
    } else {
      return darkTheme ? DARK.COLORS.BUTTON_BACKGROUND : LIGHT.COLORS.BUTTON_BACKGROUND
    }
  }

  return (
    <Pressable
      style={[styles.container, { backgroundColor: getBackgroundColor() }]}
      {...props}
    >
      <View style={styles.content}>
        {
          loading
            ? <ActivityIndicator
              size="small"
              color='#FFF'
            />
            : <Text style={[styles.text, { color: darkTheme ? '#000' : '#FFF' }]}>
              {text}
            </Text>
        }
      </View>
    </Pressable>
  )
}
