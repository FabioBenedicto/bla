import React, { forwardRef } from 'react'
import { TextInput, type TextInputProps } from 'react-native'

import { styles } from './styles'
import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

export interface MyCharInputProps extends TextInputProps {
  darkTheme?: boolean
}

export const MyCharInput = forwardRef<TextInput, MyCharInputProps>(function MyCharInput ({ darkTheme, ...props }, ref) {
  return (
    <TextInput
        ref={ref}
        maxLength={1}
        cursorColor={darkTheme
          ? DARK.COLORS.TEXT_PRIMARY
          : LIGHT.COLORS.TEXT_PRIMARY}
        style={[styles.textInput,
          {
            backgroundColor: darkTheme
              ? DARK.COLORS.TEXT_INPUT_BACKGROUND
              : LIGHT.COLORS.TEXT_INPUT_BACKGROUND,
            color: darkTheme
              ? DARK.COLORS.TEXT_PRIMARY
              : LIGHT.COLORS.TEXT_PRIMARY
          }
        ]}
        {...props}
    />
  )
})
