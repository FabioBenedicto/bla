import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  header: {
    marginBottom: 50,
    marginHorizontal: -20
  },
  background: {
    height: '40%'
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: -30,
    paddingHorizontal: 20
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 30
  },
  userTextContainer: {
    flex: 1
  },
  userText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 30,
    marginBottom: 6
  },
  userSubtext: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
    color: '#989898'
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20
  },
  titleContainer: {
    marginBottom: 40
  },
  title: {
    fontSize: 30,
    fontFamily: 'Roboto_500Medium'
  },
  line: {
    borderBottomWidth: 1
  },
  teste: {
    flex: 1,
    justifyContent: 'space-between'
  },
  noLockersFoundedContainer: {

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
