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
    marginTop: '20%',
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
  buttonContainer: {
    marginBottom: 40
  }
})
