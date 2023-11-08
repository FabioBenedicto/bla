import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center'

  },
  innerContainer: {
    borderRadius: 10,
    padding: 20
  },
  content1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  image: {
    marginRight: 15,
    width: 35,
    height: 60
  },
  textContainer: {

  },
  text: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.LG
  },
  subtext: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.MD
  },
  line: {
    borderBottomWidth: 1,
    marginBottom: 25
  },
  content2: {

  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  title: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.MD
  },
  subtitle: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.MD
  }
})
