import React, { useState, useEffect } from 'react'
import { View, Image, Text, useWindowDimensions, Pressable } from 'react-native'

import { Container, ScrollContainer } from '../../components/ScrollContainer'
import { MyTextInput } from '../../components/MyTextInput'
import { MyButton } from '../../components/MyButton'

import { styles } from './styles'
import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

import MyLockerLogo from '../../assets/MyLockerLogo.png'
import ShortLogoWhite from '../../assets/ShortLogoWhite.png'
import useDarkTheme from '../../hooks/useDarkTheme'
import { MyStatusBar } from '../../components/MyStatusBar'
import { CaretLeft } from 'phosphor-react-native'
import { useToast } from 'react-native-toast-notifications'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function ForgotPasswordScreen ({ navigation }) {
  const [email, setEmail] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const { darkTheme } = useDarkTheme()
  const logoMarginTop = useWindowDimensions().height * 0.18
  const statusBarHeight = useSafeAreaInsets().top
  const toast = useToast()

  const navigateToLoginScreen = () => {
    navigation.navigate('LoginScreen')
  }

  const handleEmailInput = () => {
    // const requestBody = {
    //   email
    // }

    setLoading(true)

    // api
    //   .put('/students/generate-code', requestBody)
    //   .then((response) => {
    //     const { randomCode } = response.data
    //     setUser({ ...user, email, code: randomCode })
    //     setLoading(false)
    //     toast.show('Bem vindo de volta - Crie sua nova senha!', { type: 'success' })
    //     setTimeout(() => {
    //       toast.hideAll()
    //       navigation.navigate('VerifyEmailScreen')
    //     }, 1500)
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.erro)
    //   })

    setTimeout(() => {
      setLoading(false)
      toast.show('Bem vindo de volta - Crie sua nova senha!', { type: 'success', style: { marginTop: statusBarHeight } })
      setTimeout(() => {
        toast.hideAll()
        navigation.navigate('VerifyEmailScreen')
      }, 1500)
    }, 3000)
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
              color={darkTheme
                ? DARK.COLORS.BUTTON_BACKGROUND
                : LIGHT.COLORS.BUTTON_BACKGROUND}
              size={30}
              weight='bold'
            />
          </Pressable>

          <Image
            source={darkTheme
              ? ShortLogoWhite
              : MyLockerLogo}
            style={[styles.logo,
              { marginTop: logoMarginTop }]}
          />

          <View style={styles.content}>

            <View style={styles.textContainer}>
              <Text style={[styles.title, {
                color: darkTheme
                  ? DARK.COLORS.TEXT_PRIMARY
                  : LIGHT.COLORS.TEXT_PRIMARY
              }
              ]}>
                Recuperar Senha
              </Text>
              <Text style={[styles.subtitle, {
                color: darkTheme
                  ? DARK.COLORS.TEXT_SECONDARY
                  : LIGHT.COLORS.TEXT_SECONDARY
              }
              ]}>
                Digite seu e-mail da Unicamp
              </Text>
            </View>

            <MyTextInput
              value={email}
              onChangeText={(text) => { setEmail(text) }}
              textContentType='emailAddress'
              inputMode='email'
              placeholder='E-mail instuticional'
              darkTheme={darkTheme}
            />

          </View>

          <View style={styles.buttonContainer}>
            <MyButton
              text='Continuar'
              loading={loading}
              darkTheme={darkTheme}
              onPress={handleEmailInput}
            />
          </View>
        </View>
      </ScrollContainer>
    </>
  )
}
