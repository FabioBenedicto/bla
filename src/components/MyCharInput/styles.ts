import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 50,
    height: 70,
    textAlign: 'center',
    fontSize: 30,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.4)', // Cor da sombra
        shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra
        shadowOpacity: 0.6, // Opacidade da sombra
        shadowRadius: 6 // Raio da sombra
      },
      android: {
        elevation: 6
      }
    })
  }
})
