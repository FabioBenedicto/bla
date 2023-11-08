import React, { type ReactNode, useState } from 'react'
import { Keyboard, useWindowDimensions, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native'

import { styles } from './styles'

import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

export interface ScrollContainerProps extends ScrollContainerOptionProps {
  keyboardSupport?: boolean
  children: ReactNode
}

export interface ScrollContainerOptionProps {
  children: ReactNode
}

export function ScrollContainer ({ keyboardSupport, children }: ScrollContainerProps) {
  return (
        <SafeAreaView style={styles.safeArea}>
            {
                keyboardSupport
                  ? <ScrollContainerWithKeyboardSupport>
                        {children}
                    </ScrollContainerWithKeyboardSupport>
                  : <ScrollContainerWithoutKeyboardSupport>
                        {children}
                    </ScrollContainerWithoutKeyboardSupport>
            }
        </SafeAreaView>
  )
}

function ScrollContainerWithKeyboardSupport ({ children }: ScrollContainerOptionProps) {
  const paddingTop = useSafeAreaInsets().top
  const [clickLocation, setClickLocation] = useState<number>()
  const height = useWindowDimensions().height - paddingTop
  console.log(height)
  return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <TouchableWithoutFeedback
            onPressIn={(event) => { setClickLocation(event.nativeEvent.pageY) }}
            onPressOut={(event) => { if (clickLocation === event.nativeEvent.pageY) Keyboard.dismiss() }}>
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[styles.innerContainer, { height }]}
                >
                    {children}
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
  )
}

function ScrollContainerWithoutKeyboardSupport ({ children }: ScrollContainerOptionProps) {
  return (
        <ScrollView
            overScrollMode='never'
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.innerContainer}
        >
            {children}
        </ScrollView>
  )
}
