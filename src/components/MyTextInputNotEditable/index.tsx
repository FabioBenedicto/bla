import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'
import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

export interface MyTextInputNotEditableProps {
  value?: string
  darkTheme?: boolean
}

export function MyTextInputNotEditable ({ value, darkTheme }: MyTextInputNotEditableProps) {
  return (
    <View style={[styles.container, { backgroundColor: darkTheme ? DARK.COLORS.TEXT_INPUT_NOT_EDITABLE_BACKGROUND : LIGHT.COLORS.TEXT_INPUT_NOT_EDITABLE_BACKGROUND }]}>
      <Text style={[styles.text, { color: darkTheme ? DARK.COLORS.TEXT_SECONDARY : LIGHT.COLORS.TEXT_SECONDARY }]}>
        {value}
      </Text>
    </View>

  )
}
