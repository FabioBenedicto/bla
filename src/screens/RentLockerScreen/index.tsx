import React, { useState } from 'react'
import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import { Container } from '../../components/ScrollContainer'
import { MyStatusBar } from '../../components/MyStatusBar'
import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

import LockerSectionYellow from '../../assets/LockerSectionYellow.png'
import LockerSectionRed from '../../assets/LockerSectionRed.png'
import LockerSectionGreen from '../../assets/LockerSectionGreen.png'
import LockerSectionBlue from '../../assets/LockerSectionBlue.png'

import { styles } from './styles'
import { LockerSection } from '../../components/LockerSection'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { setStatusBarHidden } from 'expo-status-bar'

const darkTheme = false

export function RentLockerScreen () {
  const statusBarHeight = useSafeAreaInsets().top

  setStatusBarHidden(true, 'none')

  return (
        <View style={styles.screen}>

            <View style={{ height: statusBarHeight, backgroundColor: '#002147' }}/>

            <Container>
                <View style={styles.innerContainer}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.title, {
                          color: darkTheme
                            ? DARK.COLORS.TEXT_PRIMARY
                            : LIGHT.COLORS.TEXT_PRIMARY
                        }
                        ]}>Alugue um Armário
                        </Text>
                        <Text style={[styles.subtitle, {
                          color: darkTheme
                            ? DARK.COLORS.TEXT_SECONDARY
                            : LIGHT.COLORS.TEXT_SECONDARY
                        }
                        ]}>Selecione o bloco de armários que você deseja.
                        </Text>
                    </View>
                </View>

                <ScrollView
                horizontal
                style={styles.ScrollContainer}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, alignItems: 'flex-start' }}>
                    <View style={styles.lockerSections}>
                        <View style={styles.lockerSectionRowContainer}>
                            <View style={styles.lockerSectionContainer}>
                                <LockerSection
                                    image={LockerSectionYellow}
                                    leftText='Sala 10'
                                    onPress={() => { console.log('oi') }}
                                />
                                <LockerSection
                                    image={LockerSectionYellow}
                                    leftText='Sala 11'
                                    rightText='Sala 12'
                                    onPress={() => { console.log('oi') }}
                                />
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <LockerSection
                                    image={LockerSectionRed}
                                    leftText='Saúde'
                                    onPress={() => { console.log('oi') }}
                                />
                                <LockerSection
                                    image={LockerSectionRed}
                                    leftText='Sala 13'
                                    onPress={() => { console.log('oi') }}
                                />
                                <LockerSection
                                    image={LockerSectionRed}
                                    leftText='Sala 14'
                                    rightText='Sala 15'
                                    onPress={() => { console.log('oi') }}
                                />
                            </View>
                        </View>
                        <View style={[styles.lockerSectionRowContainer, { justifyContent: 'space-around' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <LockerSection
                                image={LockerSectionGreen}
                                leftText='Sala 2'
                                rightText='Sala 3'
                                onPress={() => { console.log('oi') }}
                            />
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <LockerSection
                                image={LockerSectionBlue}
                                leftText='Vestiário Masculino'
                                onPress={() => { console.log('oi') }}
                            />

                            <LockerSection
                                image={LockerSectionBlue}
                                leftText='Sala 4'
                                rightText='Sala 5'
                                onPress={() => { console.log('oi') }}
                            />
                        </View>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        </View>
  )
}
