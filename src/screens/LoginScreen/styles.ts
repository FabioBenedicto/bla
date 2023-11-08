import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  backButtonContainer: {
    position: 'absolute',
    left: 20,
    top: 20
  },
  logo: {
    width: '100%',
    resizeMode: 'contain'
  },
  content: {
    gap: 20
  },
  textContainer: {
    gap: 10
  },
  title: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.LG,
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
    textAlign: 'center'
  },
  inputContainer: {
  },
  textInputNotEditableContainer: {
    marginBottom: 10
  },
  captionContainer: {
    marginTop: 10,
    marginLeft: 10
  },
  captionText: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
    color: '#0085FF'
  },
  buttonContainer: {
    marginBottom: 40
  }
})
