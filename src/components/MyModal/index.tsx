import React from 'react'
import { Modal, type ModalProps, Pressable, View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import { styles } from './styles'
import { DARK } from '../../themes/dark'

import LockerImage from '../../assets/LockerImage.png'
import { LIGHT } from '../../themes/light'

export interface MyModalProps extends ModalProps {
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>
  darkTheme?: boolean
}

export function MyModal ({ setIsVisible, darkTheme, ...props }: MyModalProps) {
  return (
    <Modal
    transparent
    {...props}
    >
      <Pressable
        onPress={(event) => { event.target === event.currentTarget && setIsVisible(false) }}
        style={styles.container}
      >
        <View
          style={[styles.innerContainer, {
            backgroundColor: darkTheme
              ? DARK.COLORS.BACKGROUND
              : LIGHT.COLORS.BACKGROUND
          }]}>
          <View style={styles.content1}>
            <Image source={LockerImage} style={styles.image} />
            <View style={styles.textContainer}>
              <Text
                style={[styles.text, {
                  color: darkTheme
                    ? DARK.COLORS.TEXT_PRIMARY
                    : LIGHT.COLORS.TEXT_PRIMARY
                }]}>
                Armário 752
              </Text>
              <Text
                style={[styles.subtext, {
                  color: darkTheme
                    ? DARK.COLORS.TEXT_SECONDARY
                    : LIGHT.COLORS.TEXT_SECONDARY
                }]}>
                Alugado em 25/03/2022
              </Text>
            </View>
          </View>

          <View style={[styles.line, {
            backgroundColor: darkTheme
              ? DARK.COLORS.TEXT_PRIMARY
              : LIGHT.COLORS.TEXT_PRIMARY
          }]} />

          <View style={styles.content2}>
            <View style={styles.textRow}>
              <Text style={[styles.title, {
                color: darkTheme
                  ? DARK.COLORS.TEXT_PRIMARY
                  : LIGHT.COLORS.TEXT_PRIMARY
              }]}>
                Andar:
              </Text>
              <Text style={[styles.subtitle, {
                color: darkTheme
                  ? DARK.COLORS.TEXT_SECONDARY
                  : LIGHT.COLORS.TEXT_SECONDARY
              }]}>
                Segundo
              </Text>
            </View>

            <View style={styles.textRow}>
              <Text style={[styles.title, {
                color: darkTheme
                  ? DARK.COLORS.TEXT_PRIMARY
                  : LIGHT.COLORS.TEXT_PRIMARY
              }]}>
                Cor:
              </Text>
              <Text style={[styles.subtitle, {
                color: darkTheme
                  ? DARK.COLORS.TEXT_SECONDARY
                  : LIGHT.COLORS.TEXT_SECONDARY
              }]}>
                Vermelho
              </Text>
            </View>

            <View style={styles.textRow}>
              <Text style={[styles.title, {
                color: darkTheme
                  ? DARK.COLORS.TEXT_PRIMARY
                  : LIGHT.COLORS.TEXT_PRIMARY
              }]}>
                À esquerda:
              </Text>
              <Text style={[styles.subtitle, {
                color: darkTheme
                  ? DARK.COLORS.TEXT_SECONDARY
                  : LIGHT.COLORS.TEXT_SECONDARY
              }]}>
                Saúde
              </Text>
            </View>

            <View style={styles.textRow}>
              <Text style={[styles.title, {
                color: darkTheme
                  ? DARK.COLORS.TEXT_PRIMARY
                  : LIGHT.COLORS.TEXT_PRIMARY
              }]}>
                À direita:
              </Text>
              <Text style={[styles.subtitle, {
                color: darkTheme
                  ? DARK.COLORS.TEXT_SECONDARY
                  : LIGHT.COLORS.TEXT_SECONDARY
              }]}>
                Sala 13
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal >
  )
}
