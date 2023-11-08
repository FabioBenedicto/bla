import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  content: {
    gap: 40,
  },
  header: {
    marginHorizontal: -20
  },
  iconContainer: {
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 20,
  },
  profileInformationContainer: {
    flexDirection: 'row',
    marginTop: -30,
    paddingHorizontal: 20
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 30
  },
  profileInformationTextContainer: {
    //marginTop: 30,
    alignSelf: 'flex-end',
    //flex: 1,
    gap: 6
  },
  name: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 30,
  },
  email: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
    color: '#989898'
  },
  main: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 40
  },
  title: {
    fontFamily: GLOBAL.FONT_FAMILY.MEDIUM,
    fontSize: GLOBAL.FONT_SIZE.LG
  },
  line: {
    borderBottomWidth: 1
  },
  teste: {
    flex: 1,
    justifyContent: 'space-between'
  },
  noLockersFoundedContainer: {
    marginBottom: 40,
    alignSelf: 'center',
  },
  noLockersFoundedImage: {
    width: 230,
    height: 200,
    marginBottom: 5
  },
  noLockersFoundedText: {
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',
    color: '#717171'
  },
  lockerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 25,
    paddingVertical: 30
  },
  lockerImage: {
    width: 35,
    height: 60,
    marginRight: 15
  },
  lockerTextContainer: {

  },
  lockerText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 30
  },
  lockerSubtext: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
    color: '#535353'
  },
  buttonContainer: {
    marginBottom: 40
  }

})
