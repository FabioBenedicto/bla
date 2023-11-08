import React, { useState } from 'react'
import { View, Image, Text, type ColorValue, SafeAreaView, TouchableOpacity, useWindowDimensions, Pressable } from 'react-native'

import { MyButton } from '../../components/MyButton'

import { styles } from './styles'

import DefaultProfilePicture from '../../assets/DefaultProfilePicture.jpg'
import NoLockersFounded from '../../assets/NoLockersFounded.png'
import LockerImage from '../../assets/LockerImage.png'

import {
  useSafeAreaInsets
} from 'react-native-safe-area-context'
import { MyModal } from '../../components/MyModal'
import { ScrollContainer } from '../../components/ScrollContainer'
import { MyStatusBar } from '../../components/MyStatusBar'
import useDarkTheme from '../../hooks/useDarkTheme'
import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'
import { GearSix } from 'phosphor-react-native'

export function ProfileScreen() {
  const [color, setColor] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [position, setPosition] = useState<number>()
  const { darkTheme, setDarkTheme } = useDarkTheme()
  setDarkTheme(true)
  const backgroundHeight = useWindowDimensions().height * 0.18

  console.log(backgroundHeight)

  return (
    <>
      <MyStatusBar
        backgroundColor='blue'
        style='light'
      />

      <ScrollContainer>
        <View style={styles.container}>

          <MyModal visible={isVisible} setIsVisible={setIsVisible} darkTheme={darkTheme}/>

          <View style={styles.content}>

            <View style={styles.header}>

              <View style={
                {
                  backgroundColor: color || '#D1D1D1',
                  height: backgroundHeight
                }}>
                  <Pressable style={styles.iconContainer}>
                  <GearSix size={20} weight="bold" />
                  </Pressable>
                </View>

              <View style={styles.profileInformationContainer}>
                <Image
                  source={DefaultProfilePicture}
                  style={styles.profilePicture}
                />

                <View style={styles.profileInformationTextContainer}>
                  <Text
                    numberOfLines={1}
                    style={[styles.name,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY
                    }]}>
                    Nome Sobrenome
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={[styles.email, {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_SECONDARY
                        : LIGHT.COLORS.TEXT_SECONDARY
                    }]}>
                    email@g.unicamp.br
                  </Text>
                </View>
              </View>

            </View>

            <View style={styles.main}>

              <View style={styles.titleContainer}>
                <Text style={[styles.title, {
                  color: darkTheme
                    ? DARK.COLORS.TEXT_PRIMARY
                    : LIGHT.COLORS.TEXT_PRIMARY
                }]}>
                  Meu Armário
                </Text>
                <View style={[styles.line, {
                  borderColor: darkTheme
                    ? DARK.COLORS.TEXT_PRIMARY
                    : LIGHT.COLORS.TEXT_PRIMARY
                }]} />
              </View>


              <View style={styles.noLockersFoundedContainer}>
                <Image
                  source={NoLockersFounded}
                  style={styles.noLockersFoundedImage}
                />
                <Text style={styles.noLockersFoundedText}>Nenhum armário alugado</Text>
              </View>

              <TouchableOpacity activeOpacity={0.8} onPress={() => { setIsVisible(true) }} style={[styles.lockerContainer, {
                              backgroundColor: darkTheme
                                ? DARK.COLORS.PANEL_BACKGROUND
                                : LIGHT.COLORS.PANEL_BACKGROUND
                            }]}>
                                <Image source={LockerImage} style={styles.lockerImage} />
                                <View style={styles.lockerTextContainer}>
                                    <Text style={[styles.lockerText, {
                                      color: darkTheme
                                        ? DARK.COLORS.TEXT_PRIMARY
                                        : LIGHT.COLORS.TEXT_PRIMARY
                                    }]}>Armário 752</Text>
                                    <Text style={[styles.lockerSubtext, {
                                      color: darkTheme
                                        ? DARK.COLORS.TEXT_SECONDARY
                                        : LIGHT.COLORS.TEXT_SECONDARY
                                    }]}>Alugado em 25/03/2022</Text>
                                </View>
                            </TouchableOpacity>

            </View>
          </View>

          <View style={styles.buttonContainer}>
            <MyButton
              text='Alugar um armário'
              darkTheme={darkTheme}
            />
          </View>

        </View>
      </ScrollContainer>

    </>

  )
}
