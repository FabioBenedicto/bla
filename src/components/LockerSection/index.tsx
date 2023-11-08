import React, { useState } from 'react'

import { Pressable, Image, Text, type ImageSourcePropType, type PressableProps } from 'react-native'

import { styles } from './styles'

export interface LockerSectionProps extends PressableProps {
  image: ImageSourcePropType
  leftText: string
  rightText?: string
}

const TEXT_LENGTH = 186
const TEXT_HEIGHT = 36
const OFFSET = (TEXT_LENGTH / 2) - (TEXT_HEIGHT / 2)

export function LockerSection ({ image, leftText, rightText, ...props }: LockerSectionProps) {
  return (
    <Pressable
      style={[styles.container]}
      {...props}
    >
      <Text
        style={[styles.text, { transform: [{ rotate: '270deg' }], marginLeft: -OFFSET, marginRight: -OFFSET }]}>{leftText}</Text>
      <Image source={image} style={styles.image} />
      {
        rightText
          ? <Text
            style={[styles.text, { transform: [{ rotate: '270deg' }], marginLeft: -OFFSET, marginRight: -OFFSET }]}>{rightText}</Text>
          : null
      }
    </Pressable>
  )
}
