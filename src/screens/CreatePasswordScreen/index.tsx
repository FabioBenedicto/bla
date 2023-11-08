import React, { useState } from 'react'
import { Image, View, Text, TouchableOpacity, Pressable, useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useToast } from 'react-native-toast-notifications'

import { MyStatusBar } from '../../components/MyStatusBar'
import { ScrollContainer } from '../../components/ScrollContainer'
import { MyTextInput } from '../../components/MyTextInput'
import { MyButton } from '../../components/MyButton'

import { styles } from './styles'

import { GLOBAL } from '../../themes/global'
import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

import MyLockerLogo from '../../assets/MyLockerLogo.png'
import ShortLogoWhite from '../../assets/ShortLogoWhite.png'

import useDarkTheme from '../../hooks/useDarkTheme'

import { CaretLeft } from 'phosphor-react-native'

export function CreatePasswordScreen ({ navigation }) {
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const { darkTheme } = useDarkTheme()
  const toast = useToast()
  const logoMarginTop = useWindowDimensions().height * 0.18
  const statusBarHeight = useSafeAreaInsets().top

  const navigateToLoginScreen = () => {
    navigation.navigate('LoginScreen')
  }

  const handleCreatePassword = () => {
    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
    const passwordHasLettersAndNumbers = regex.test(password)
    if (!passwordHasLettersAndNumbers) {
      toast.show(
        'Sua senha deve conter numeros, letras minusculas e letras maiusculas',
        {
          type: 'error',
          placement: 'top',
          style: { marginTop: statusBarHeight },
          textStyle: { textAlign: 'center' }
        }
      )
    }

    const passwordMatches = password === passwordConfirm

    if (!passwordMatches) {
      toast.show(
        'Senhas não coincidem',
        {
          type: 'error',
          placement: 'top',
          style: { marginTop: statusBarHeight },
          textStyle: { textAlign: 'center' }
        }
      )
    }

    if (passwordMatches) {
      toast.hideAll()
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        toast.show('Senha criada com sucesso',
          {
            type: 'success',
            placement: 'top',
            style: { marginTop: statusBarHeight },
            textStyle: { textAlign: 'center' },
            duration: 1500
          })
        setTimeout(() => {
          setLoading(false)
          navigation.navigate('LoginScreen')
        }, 1500)
      }, 3000)
    }
  }

  return (
        <>
            <MyStatusBar
                backgroundColor={darkTheme
                  ? DARK.COLORS.BACKGROUND
                  : LIGHT.COLORS.BACKGROUND
                }
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
                                Criar Senha
                            </Text>
                            <Text style={[styles.subtitle, {
                              color: darkTheme
                                ? DARK.COLORS.TEXT_SECONDARY
                                : LIGHT.COLORS.TEXT_SECONDARY
                            }
                            ]}>
                                Crie uma senha para sua conta
                            </Text>
                        </View>

                        <View style={styles.inputGroup}>
                            <MyTextInput
                                value={password}
                                onChangeText={(text) => { setPassword(text) }}
                                passwordTextInput
                                placeholder='Senha'
                                textContentType='password'
                                darkTheme={darkTheme}
                            />

                            <MyTextInput
                                value={passwordConfirm}
                                onChangeText={(text) => { setPasswordConfirm(text) }}
                                passwordTextInput
                                placeholder='Confirmar Senha'
                                textContentType='password'
                                darkTheme={darkTheme}
                            />
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <MyButton
                            text='Continuar'
                            loading={loading}
                            darkTheme={darkTheme}
                            onPress={handleCreatePassword}
                        />
                    </View>
                </View>
            </ScrollContainer>
        </>
  )
}
