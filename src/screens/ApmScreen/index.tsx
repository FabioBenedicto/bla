import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import { Container } from '../../components/ScrollContainer'

import { styles } from './styles'
import useDarkTheme from '../../hooks/useDarkTheme'

import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

import { FilePlus } from 'phosphor-react-native'

export function ApmScreen () {
  const { darkTheme } = useDarkTheme()
  return (
        <Container>
            <View style={styles.innerContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.title, {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY
                    }]}>
                        APM
                    </Text>
                    <Text style={[styles.subtitle, {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_SECONDARY
                        : LIGHT.COLORS.TEXT_SECONDARY
                    }]}>
                        Submeta e acompanhe a situação de seu pedido de desconto pela APM.
                    </Text>
                </View>

                <TouchableOpacity style={styles.buttonContainer}>
                    <FilePlus size={60} weight='bold' color='black'/>
                    <Text style={styles.buttonText}>
                        Submeter comprovante de pagamento
                    </Text>
                </TouchableOpacity>

                <View>
                    <Text>Documento.pdf</Text>
                    <TouchableOpacity style={styles.submitButtonContainer}>

                    </TouchableOpacity>
                </View>
            </View>
        </Container>
  )
}
