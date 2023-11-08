import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  innerContainer: {
    paddingHorizontal: 20
  },
  textContainer: {
    marginTop: 50,
    marginBottom: 50
  },
  title: {
    fontFamily: GLOBAL.FONT_FAMILY.MEDIUM,
    fontSize: GLOBAL.FONT_SIZE.LG,
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.MD,
    textAlign: 'center'
  },
  ScrollContainer: {
    marginBottom: 40
  },
  lockerSections: {
    flexDirection: 'column',
    backgroundColor: '#F6F6F6',
    padding: 30,
    borderRadius: 30,
    marginHorizontal: 20,
    rowGap: 40
  },
  lockerSectionRowContainer: {
    flexDirection: 'row',
    columnGap: 20
  },
  lockerSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20
  },
  lockerSectionText: {
    fontFamily: GLOBAL.FONT_FAMILY.MEDIUM,
    fontSize: GLOBAL.FONT_SIZE.LG,
    transform: [{ rotate: '270 deg' }],
    backgroundColor: 'blue'
  },
  lockerSectionImage: {
    width: 186,
    height: 186,
    resizeMode: 'contain',
    backgroundColor: 'green'
  }
})
