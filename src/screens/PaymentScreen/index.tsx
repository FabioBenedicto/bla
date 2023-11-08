import React, { useState } from 'react'

import { View, Text, Image } from 'react-native'

import { Container } from '../../components/ScrollContainer'

import { styles } from './styles'
import useDarkTheme from '../../hooks/useDarkTheme'
import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'
import LockerImage from '../../assets/LockerImage.png'
import { MyButton } from '../../components/MyButton'
import { MyStatusBar } from '../../components/MyStatusBar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function PaymentScreen () {
  const { darkTheme } = useDarkTheme()
  const [loading, setLoading] = useState()

  return (
    <View style={styles.screen}>

      <MyStatusBar
        backgroundColor='#002147'
        style='light'
      />

        <Container>
            <View style={styles.innerContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.title, {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY
                    }]}>
                        Alugue um Armário
                    </Text>
                    <Text style={[styles.subtitle, {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_SECONDARY
                        : LIGHT.COLORS.TEXT_SECONDARY
                    }]}>
                        Revise seu pedido e realize o pagamento
                    </Text>
                </View>

                <View style={styles.LockerInformationsContainer}>
                    <View style={styles.LockerMainInformationsContainer}>
                        <View style={[styles.lockerImageContainer, { backgroundColor: 'red' }]}>
                            <Image source={LockerImage} style={styles.lockerImage} />
                        </View>
                        <View style={styles.lockerMainInformationsTextContainer}>
                            <Text style={styles.LockerMainInformationsTitle}>Armário 752</Text>
                            <Text style={styles.LockerMainInformationsSubtitle}>R$200,00</Text>
                        </View>
                    </View>
                    <View style={styles.LockerSecondaryInformationsContainer}>
                        <View style={styles.lockerSecondaryInformationsRowContainer}>
                            <Text
                                style={[styles.lockerSecondaryInformationsTitle,
                                  {
                                    color: darkTheme
                                      ? DARK.COLORS.TEXT_PRIMARY
                                      : LIGHT.COLORS.TEXT_PRIMARY
                                  }
                                ]}>
                                Andar:
                            </Text>
                            <Text
                                style={[styles.lockerSecondaryInformationsSubtitle,
                                  {
                                    color: darkTheme
                                      ? DARK.COLORS.TEXT_SECONDARY
                                      : LIGHT.COLORS.TEXT_SECONDARY
                                  }
                                ]}>
                                Segundo
                            </Text>
                        </View>
                        <View style={styles.lockerSecondaryInformationsRowContainer}>
                            <Text
                                style={[styles.lockerSecondaryInformationsTitle,
                                  {
                                    color: darkTheme
                                      ? DARK.COLORS.TEXT_PRIMARY
                                      : LIGHT.COLORS.TEXT_PRIMARY
                                  }
                                ]}>
                                Cor:
                            </Text>
                            <View style={styles.lockerSecondaryInformationColorContainer}>
                                <Text
                                    style={[styles.lockerSecondaryInformationsSubtitle,
                                      {
                                        color: darkTheme
                                          ? DARK.COLORS.TEXT_SECONDARY
                                          : LIGHT.COLORS.TEXT_SECONDARY
                                      }
                                    ]}>
                                    Vermelho
                                </Text>
                                <View style={styles.lockerSecondaryInformationColor} />
                            </View>
                        </View>
                        <View style={styles.lockerSecondaryInformationsRowContainer}>
                            <Text
                                style={[styles.lockerSecondaryInformationsTitle,
                                  {
                                    color: darkTheme
                                      ? DARK.COLORS.TEXT_PRIMARY
                                      : LIGHT.COLORS.TEXT_PRIMARY
                                  }
                                ]}>
                                À esquerda:
                            </Text>
                            <Text
                                style={[styles.lockerSecondaryInformationsSubtitle,
                                  {
                                    color: darkTheme
                                      ? DARK.COLORS.TEXT_SECONDARY
                                      : LIGHT.COLORS.TEXT_SECONDARY
                                  }
                                ]}>
                                Saúde
                            </Text>
                        </View>
                        <View style={styles.lockerSecondaryInformationsRowContainer}>
                            <Text
                                style={[styles.lockerSecondaryInformationsTitle,
                                  {
                                    color: darkTheme
                                      ? DARK.COLORS.TEXT_PRIMARY
                                      : LIGHT.COLORS.TEXT_PRIMARY
                                  }
                                ]}>
                                À direita:
                            </Text>
                            <Text
                                style={[styles.lockerSecondaryInformationsSubtitle,
                                  {
                                    color: darkTheme
                                      ? DARK.COLORS.TEXT_SECONDARY
                                      : LIGHT.COLORS.TEXT_SECONDARY
                                  }
                                ]}>
                                Sala 13
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.priceContainer}>
                    <View style={styles.priceRowContainer}>
                        <Text
                            style={[styles.priceTitle,
                              {
                                color: darkTheme
                                  ? DARK.COLORS.TEXT_PRIMARY
                                  : LIGHT.COLORS.TEXT_PRIMARY
                              }
                            ]}>
                            Subtotal
                        </Text>
                        <Text
                            style={[styles.priceTitle,
                              {
                                color: darkTheme
                                  ? DARK.COLORS.TEXT_PRIMARY
                                  : LIGHT.COLORS.TEXT_PRIMARY
                              }
                            ]}>
                            R$200,00
                        </Text>
                    </View>
                    <View style={styles.priceRowContainer}>
                        <Text
                            style={[styles.priceSubtitle,
                              {
                                color: darkTheme
                                  ? DARK.COLORS.TEXT_SECONDARY
                                  : LIGHT.COLORS.TEXT_SECONDARY
                              }
                            ]}>
                            Desconto APM
                        </Text>
                        <Text
                            style={[styles.priceSubtitle,
                              {
                                color: darkTheme
                                  ? DARK.COLORS.TEXT_SECONDARY
                                  : LIGHT.COLORS.TEXT_SECONDARY
                              }
                            ]}>
                            (50%) - R$100,00
                        </Text>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.priceRowContainer}>
                        <Text
                            style={[styles.priceTitle,
                              {
                                color: darkTheme
                                  ? DARK.COLORS.TEXT_PRIMARY
                                  : LIGHT.COLORS.TEXT_PRIMARY
                              }
                            ]}>
                            Total
                        </Text>
                        <Text
                            style={[styles.priceTitle,
                              {
                                color: darkTheme
                                  ? DARK.COLORS.TEXT_PRIMARY
                                  : LIGHT.COLORS.TEXT_PRIMARY
                              }
                            ]}>
                            R$100,00
                        </Text>
                    </View>
                </View>

            <View style={styles.buttonContainer}>
                <MyButton
                    text='Finalizar Compra'
                    loading={loading}
                    darkTheme={darkTheme}
                />
            </View>

            </View>
        </Container>
        </View>
  )
}
