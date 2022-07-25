import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../theme';

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.main,
  },
  main: {
    width: width,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: COLORS.food,
  },
  snake: {
    backgroundColor: COLORS.snake,
  },
  food: {
    backgroundColor: COLORS.food,
  },
  arrow: {
    backgroundColor: '#EF5B0C',
  },
  scoreText: {
    fontSize: 150,
    color: '#395B64',
  },
});

export default styles;
