import { StyleSheet, Platform } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'space-between'
  },
  textContainer: {
    marginBottom: 40
  },
  title: {
    fontFamily: GLOBAL.FONT_FAMILY.BOLD,
    fontSize: GLOBAL.FONT_SIZE.LG,
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.MD,
    textAlign: 'center'
  },
  LockerInformationsContainer: {
    padding: 30,
    backgroundColor: '#F6F6F6',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  LockerMainInformationsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  lockerImageContainer: {
    borderRadius: 5,
    marginRight: 15
  },
  lockerImage: {
    aspectRatio: 0.6,
    height: 65
  },
  lockerMainInformationsTextContainer: {
  },
  LockerMainInformationsTitle: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.LG,
    marginBottom: 5
  },
  LockerMainInformationsSubtitle: {
    fontFamily: GLOBAL.FONT_FAMILY.MEDIUM,
    fontSize: 22
  },
  LockerSecondaryInformationsContainer: {
    width: '100%'
  },
  lockerSecondaryInformationsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  lockerSecondaryInformationsTitle: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM
  },
  lockerSecondaryInformationsSubtitle: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM
  },
  lockerSecondaryInformationColorContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  lockerSecondaryInformationColor: {
    width: 14,
    height: 14,
    borderRadius: 4,
    backgroundColor: 'red',
    marginLeft: 5
  },
  priceContainer: {
    gap: 15
  },
  priceRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceTitle: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.LG
  },
  priceSubtitle: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM
  },
  line: {
    borderColor: '#B0B0B0',
    borderBottomWidth: 1,
    borderStyle: Platform.OS === 'ios' ? 'solid' : 'dashed'
  },
  buttonContainer: {
    marginBottom: 40
  }
})
