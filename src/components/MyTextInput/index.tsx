import React, { useState } from 'react'
import { View, TextInput, Pressable, type TextInputProps, Platform } from 'react-native'

import { styles } from './styles'

import { Eye, EyeSlash } from 'phosphor-react-native'
import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

export interface MyTextInputProps extends TextInputProps {
  passwordTextInput?: boolean
  darkTheme?: boolean
}

interface StyledTextInputProps extends TextInputProps {
  darkTheme?: boolean
}

interface StyledPasswordTextInputProps extends TextInputProps {
  darkTheme?: boolean
}

export function MyTextInput ({ passwordTextInput, darkTheme, ...props }: MyTextInputProps) {
  return (
    <>
      {
        passwordTextInput
          ? <StyledPasswordTextInput darkTheme={darkTheme} {...props} />
          : <StyledTextInput darkTheme={darkTheme} {...props} />
      }
    </>
  )
}

function StyledTextInput ({ darkTheme, ...props }: StyledTextInputProps) {
  return (
    <TextInput
    keyboardAppearance={darkTheme
      ? 'dark'
      : 'light'}
      spellCheck={false}
      selectTextOnFocus={Platform.OS === 'ios'}
      placeholderTextColor={darkTheme
        ? DARK.COLORS.TEXT_PLACEHOLDER
        : LIGHT.COLORS.TEXT_PLACEHOLDER}
      cursorColor={darkTheme
        ? DARK.COLORS.TEXT_PRIMARY
        : LIGHT.COLORS.TEXT_PRIMARY}
      style={[styles.textInput, {
        backgroundColor: darkTheme
          ? DARK.COLORS.TEXT_INPUT_BACKGROUND
          : LIGHT.COLORS.TEXT_INPUT_BACKGROUND,
        color: darkTheme
          ? DARK.COLORS.TEXT_PRIMARY
          : LIGHT.COLORS.TEXT_PRIMARY
      }]}
      {...props}
    />
  )
}

function StyledPasswordTextInput ({ darkTheme, ...props }: StyledPasswordTextInputProps) {
  const [isPasswordVisibile, setIsPasswordVisible] = useState<boolean>(false)
  return (
    <View style={[styles.innerContainer, {
      backgroundColor: darkTheme
        ? DARK.COLORS.TEXT_INPUT_BACKGROUND
        : LIGHT.COLORS.TEXT_INPUT_BACKGROUND
    }]}>
      <TextInput
        secureTextEntry={!isPasswordVisibile}
        selectTextOnFocus={Platform.OS === 'ios'}
        placeholderTextColor={darkTheme
          ? DARK.COLORS.TEXT_PLACEHOLDER
          : LIGHT.COLORS.TEXT_PLACEHOLDER}
        cursorColor={darkTheme
          ? DARK.COLORS.TEXT_PRIMARY
          : LIGHT.COLORS.TEXT_PRIMARY}
        style={[styles.passwordTextInput, {
          color: darkTheme
            ? DARK.COLORS.TEXT_PRIMARY
            : LIGHT.COLORS.TEXT_PRIMARY
        }]}
        {...props}
      />
      <Pressable
        onPress={() => { setIsPasswordVisible(!isPasswordVisibile) }}
        style={styles.button}
      >
        {
          isPasswordVisibile
            ? <EyeSlash
              color={darkTheme
                ? DARK.COLORS.TEXT_PRIMARY
                : LIGHT.COLORS.TEXT_PRIMARY}
              size={20}
              weight='bold'
            />
            : <Eye
              color={darkTheme
                ? DARK.COLORS.TEXT_PRIMARY
                : LIGHT.COLORS.TEXT_PRIMARY}
              size={20}
              weight='bold'
            />
        }
      </Pressable>
    </View>
  )
}
