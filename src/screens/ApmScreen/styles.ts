import { StyleSheet } from 'react-native'
import { DEFAULT } from '../../themes/global'

export const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20
  },
  textContainer: {
    marginBottom: 40
  },
  title: {
    fontFamily: DEFAULT.FONT_FAMILY.BOLD,
    fontSize: DEFAULT.FONT_SIZE.LG,
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    fontFamily: DEFAULT.FONT_FAMILY.REGULAR,
    fontSize: DEFAULT.FONT_SIZE.MD,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'column',
    backgroundColor: '#2d2e30',
    // height: 400,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  buttonText: {
    fontFamily: DEFAULT.FONT_FAMILY.BOLD,
    fontSize: DEFAULT.FONT_SIZE.LG,
    textAlign: 'center'
  }
})
