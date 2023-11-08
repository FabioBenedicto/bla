import React, { useState, useRef } from 'react'
import { View, Image, Text, TouchableOpacity, Keyboard, Pressable, type TextInput, type TextInputProps, useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useToast } from 'react-native-toast-notifications'

import { styles } from './styles'

import { ScrollContainer } from '../../components/ScrollContainer'
import { MyButton } from '../../components/MyButton'

import MyLockerLogo from '../../assets/MyLockerLogo.png'
import ShortLogoWhite from '../../assets/ShortLogoWhite.png'

import { MyCharInput, type MyCharInputProps } from '../../components/MyCharInput'
import { LIGHT } from '../../themes/light'
import { DARK } from '../../themes/dark'
import { MyStatusBar } from '../../components/MyStatusBar'

import useDarkTheme from '../../hooks/useDarkTheme'
import { CaretLeft } from 'phosphor-react-native'
import { GLOBAL } from '../../themes/global'

export function VerifyEmailScreen ({ navigation }) {
  const [input1Value, setInput1Value] = useState<string>('')
  const [input2Value, setInput2Value] = useState<string>('')
  const [input3Value, setInput3Value] = useState<string>('')
  const [input4Value, setInput4Value] = useState<string>('')
  const [input5Value, setInput5Value] = useState<string>('')
  const [input6Value, setInput6Value] = useState<string>('')
  const [loading, setLoading] = useState<boolean>()
  const { darkTheme } = useDarkTheme()
  const toast = useToast()
  const statusBarHeight = useSafeAreaInsets().top
  const logoMarginTop = useWindowDimensions().height * 0.18

  const ALLOWED_CHARACTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  const inputsRef = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null)
  ]

  const handleKeyPress = (e, value) => {
    if (ALLOWED_CHARACTERS.includes(e.nativeEvent.key.toLowerCase())) {
      if (value === 5) {
        Keyboard.dismiss()
      } else {
        value++
        inputsRef[value].current?.focus()
      }
    } else if (e.nativeEvent.key === 'Backspace') {
      if (value === 0) {
        Keyboard.dismiss()
      } else {
        value--
        inputsRef[value].current?.focus()
      }
    }
  }

  const handleCodeSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.hideAll()
      navigation.navigate('CreatePasswordScreen')
    }, 3000)
  }

  const handleCodeResubmit = () => {
    toast.show('Reenviando código...',
      {
        placement: 'top',
        style: {
          marginTop: statusBarHeight,
          backgroundColor: darkTheme
            ? DARK.COLORS.TOAST_BACKGROUND
            : LIGHT.COLORS.TOAST_BACKGROUND,
          elevation: 6
        },
        icon: <CaretLeft
          weight='bold'
          size={GLOBAL.FONT_SIZE.LG}
          color='black'
        />,
        textStyle: { textAlign: 'center', color: 'black' },
        duration: 5000
      }
    )
    setTimeout(() => {
      toast.hideAll()
      toast.show('Código reenviado', {
        type: 'success',
        placement: 'top',
        style: { marginTop: statusBarHeight },
        textStyle: { textAlign: 'center' }
      }
      )
    }, 5000)
  }

  const navigateToLoginScreen = () => {
    navigation.navigate('LoginScreen')
  }

  return (
    <>

      <MyStatusBar
        backgroundColor={darkTheme
          ? DARK.COLORS.BACKGROUND
          : LIGHT.COLORS.BACKGROUND}
        style={darkTheme
          ? 'light'
          : 'dark'
        }
      />

      <ScrollContainer keyboardSupport>
        <View style={styles.container}>

          <Pressable
            style={styles.backButtonContainer}
            onPress={navigateToLoginScreen}
          >
            <CaretLeft
              weight='bold'
              size={GLOBAL.FONT_SIZE.LG}
              color={darkTheme
                ? DARK.COLORS.BUTTON_BACKGROUND
                : LIGHT.COLORS.BUTTON_BACKGROUND}
            />
          </Pressable>

          <Image
            source={darkTheme
              ? ShortLogoWhite
              : MyLockerLogo}
            style={[styles.logo,
              {
                marginTop: logoMarginTop
              }
            ]}
          />

          <View style={styles.content}>

            <View style={styles.textContainer}>
              <Text style={[styles.title, {
                color: darkTheme
                  ? DARK.COLORS.TEXT_PRIMARY
                  : LIGHT.COLORS.TEXT_PRIMARY
              }
              ]}>
                Verifique seu e-mail
              </Text>
              <Text style={[styles.subtitle, {
                color: darkTheme
                  ? DARK.COLORS.TEXT_SECONDARY
                  : LIGHT.COLORS.TEXT_SECONDARY
              }
              ]}>
                Digite o código enviado para o seu e-mail
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.inputGroup}>
                <MyCharInput
                  ref={inputsRef[0]}
                  value={input1Value}
                  onChangeText={(text) => { setInput1Value(text) }}
                  onKeyPress={(e) => { handleKeyPress(e, 0) }}
                  darkTheme={true}
                />
                <MyCharInput
                  ref={inputsRef[1]}
                  value={input2Value}
                  onChangeText={(text) => { setInput2Value(text) }}
                  onKeyPress={(e) => { handleKeyPress(e, 1) }}
                  darkTheme={true}
                />
                <MyCharInput
                  ref={inputsRef[2]}
                  value={input3Value}
                  onChangeText={(text) => { setInput3Value(text) }}
                  onKeyPress={(e) => { handleKeyPress(e, 2) }}
                  darkTheme={true}
                />
                <MyCharInput
                  ref={inputsRef[3]}
                  value={input4Value}
                  onChangeText={(text) => { setInput4Value(text) }}
                  onKeyPress={(e) => { handleKeyPress(e, 3) }}
                  darkTheme={true}
                />
                <MyCharInput
                  ref={inputsRef[4]}
                  value={input5Value}
                  onChangeText={(text) => { setInput5Value(text) }}
                  onKeyPress={(e) => { handleKeyPress(e, 4) }}
                  darkTheme={true}
                />
                <MyCharInput
                  ref={inputsRef[5]}
                  value={input6Value}
                  onChangeText={(text) => { setInput6Value(text) }}
                  onKeyPress={(e) => { handleKeyPress(e, 5) }}
                  darkTheme={true}
                />
              </View>
              <TouchableOpacity
                onPress={handleCodeResubmit}
                style={styles.captionContainer}
              >
                <Text style={styles.captionText}>Reenviar código</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <MyButton
              onPress={handleCodeSubmit}
              text='Continuar'
              loading={loading}
              darkTheme={darkTheme}
            />
          </View>
        </View>
      </ScrollContainer>
    </>
  )
}
