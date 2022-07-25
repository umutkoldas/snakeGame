import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  transparentModalView: {
    alignSelf: 'center',
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  gameOverModal: {
    alignSelf: 'center',
    width: width - 40,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    zIndex: 3,
    borderRadius: 4,
    opacity: 1,
  },
  twoButtonView: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-around',
  },
  scoreText: {
    fontSize: 30,
    fontWeight: '500',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '400',
  },
});
export default styles;
