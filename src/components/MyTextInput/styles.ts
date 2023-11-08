import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  container: {
  },
  textInput: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    fontSize: 20,
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
  },
  innerContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
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
  },
  passwordTextInput: {
    flex: 1,
    paddingVertical: 24,
    paddingLeft: 24,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    fontSize: 20
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12
  }
})
