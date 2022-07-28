import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../theme/index';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  textInput: {
    width: '90%',
    padding: 12,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: COLORS.snake,
    color: COLORS.snake,
    zIndex: 1,
  },
  loginOptionsView: {
    flexDirection: 'row',
    width: '90%',
    padding: 12,
    justifyContent: 'space-between',
  },
  loginGmail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    width: '50%',
  },
  loginFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    width: '50%',
  },
  loginText: {
    color: COLORS.snake,
    fontSize: 20,
    padding: 12,
  },
  loginTextView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
