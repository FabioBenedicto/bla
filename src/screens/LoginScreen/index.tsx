import React, { useState } from 'react'
import { View, Image, Text, Pressable, useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useToast } from 'react-native-toast-notifications'

import { MyStatusBar } from '../../components/MyStatusBar'
import { ScrollContainer } from '../../components/ScrollContainer'
import { MyTextInput } from '../../components/MyTextInput'
import { MyTextInputNotEditable } from '../../components/MyTextInputNotEditable'
import { MyButton } from '../../components/MyButton'

import { styles } from './styles'

import { GLOBAL } from '../../themes/global'
import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

import MyLockerLogo from '../../assets/MyLockerLogo.png'
import ShortLogoWhite from '../../assets/ShortLogoWhite.png'

import useDarkTheme from '../../hooks/useDarkTheme'

import { CaretLeft } from 'phosphor-react-native'

export function LoginScreen ({ navigation }) {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loginWithEmailSucceed, setLoginWithEmailSucceed] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const { darkTheme } = useDarkTheme()
  const toast = useToast()
  const statusBarHeight = useSafeAreaInsets().top
  const logoMarginTop = useWindowDimensions().height * 0.18

  const showForgotEmailToast = () => {
    toast.show(
      'Seu email institucional segue o seguinte formato: "clRA@g.unicamp.br"',
      {
        type: 'sucess',
        placement: 'top',
        style: { marginTop: statusBarHeight, width: '100%' },
        textStyle: { textAlign: 'center', width: '100%' }
      }
    )
  }

  const handleLogin = () => {
    setLoading(true)
    setTimeout(() => {
      toast.hideAll()
      setLoading(false)
      setLoginWithEmailSucceed(true)
    }, 3000)
  }

  const navigateToCreatePasswordScreen = () => {
    navigation.navigate('VerifyEmailScreen')
  }

  const handlePasswordVerification = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setLoginWithEmailSucceed(true)
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

      <ScrollContainer
        keyboardSupport
      >

        <View style={styles.container}>

          {
            loginWithEmailSucceed
              ? <Pressable
                style={styles.backButtonContainer}
                onPress={() => { setLoginWithEmailSucceed(false) }}
              >
                <CaretLeft
                  weight='bold'
                  size={GLOBAL.FONT_SIZE.LG}
                  color={darkTheme
                    ? DARK.COLORS.BUTTON_BACKGROUND
                    : LIGHT.COLORS.BUTTON_BACKGROUND}
                />
              </Pressable>
              : null
          }

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
                Entrar
              </Text>
              <Text style={[styles.subtitle, {
                color: darkTheme
                  ? DARK.COLORS.TEXT_SECONDARY
                  : LIGHT.COLORS.TEXT_SECONDARY
              }
              ]}>
                {
                  loginWithEmailSucceed
                    ? 'Digite sua senha para fazer login'
                    : 'Digite seu e-mail da Unicamp'
                }
              </Text>
            </View>

            <View style={styles.inputContainer}>
              {
                loginWithEmailSucceed
                  ? <>
                    <View style={styles.textInputNotEditableContainer}>
                      <MyTextInputNotEditable
                        value={email}
                        darkTheme={darkTheme}
                      />
                    </View>

                    <MyTextInput
                      passwordTextInput
                      value={password}
                      onChangeText={(text) => { setPassword(text) }}
                      textContentType='password'
                      placeholder='Senha'
                      darkTheme={darkTheme} />

                    <Pressable
                      onPress={navigateToCreatePasswordScreen}
                      style={styles.captionContainer}
                    >
                      <Text style={styles.captionText}>
                        Esqueceu sua senha?
                      </Text>
                    </Pressable>
                  </>

                  : <>
                    <MyTextInput
                      value={email}
                      onChangeText={(text) => { setEmail(text) }}
                      inputMode='email'
                      textContentType='emailAddress'
                      placeholder='E-mail instuticional'
                      darkTheme={darkTheme}
                      />

                    <Pressable
                      onPress={showForgotEmailToast}
                      style={styles.captionContainer}
                    >
                      <Text style={styles.captionText}>
                        Esqueceu seu email?
                      </Text>
                    </Pressable>
                  </>

              }
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <MyButton
              text='Continuar'
              loading={loading}
              darkTheme={darkTheme}
              onPress={loginWithEmailSucceed
                ? handlePasswordVerification
                : handleLogin
              }
            />
          </View>

        </View>

      </ScrollContainer >
    </>
  )
}
