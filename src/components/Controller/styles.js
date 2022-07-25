import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');

const defaultArrow = {
  alignItems: 'center',
  width: '100%',
};
const styles = StyleSheet.create({
  arrowWiew: {
    justifyContent: 'flex-end',
    padding: 12,
  },
  leftAndRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
  },
  arrowDown: {...defaultArrow},
  arrowUp: {...defaultArrow},
  playAndPauseContainer: {
    width: width / 5,
    alignItems: 'center',
  },
});
export default styles;
