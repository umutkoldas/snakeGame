import {View, Dimensions} from 'react-native';
import React from 'react';
import Icon from '../../icons/icon';
import styles from './styles';

const {width} = Dimensions.get('screen');
const arrowWidth = width / 5;
const arrowHeight = width / 5;
const pauseAndPlayWidthHeight = width / 10;

const Controller = ({
  onPressLeft,
  onPressDown,
  onPressRight,
  onPressUp,
  paused,
  pauseAndPlayGame,
}) => {
  return (
    <View style={styles.arrowWiew}>
      <View style={styles.arrowUp}>
        <Icon
          onPress={onPressUp}
          iconName="UpArrow"
          width={arrowWidth}
          height={arrowHeight}
        />
      </View>
      <View style={styles.leftAndRight}>
        <Icon
          onPress={onPressLeft}
          iconName="LeftArrow"
          width={arrowWidth}
          height={arrowHeight}
        />
        <View style={styles.playAndPauseContainer}>
          {paused ? (
            <Icon
              width={pauseAndPlayWidthHeight}
              height={pauseAndPlayWidthHeight}
              onPress={pauseAndPlayGame}
              iconName="Play"
            />
          ) : (
            <Icon
              width={pauseAndPlayWidthHeight}
              height={pauseAndPlayWidthHeight}
              onPress={pauseAndPlayGame}
              iconName="Pause"
            />
          )}
        </View>
        <Icon
          onPress={onPressRight}
          o
          iconName="RightArrow"
          width={arrowWidth}
          height={arrowHeight}
        />
      </View>
      <View style={styles.arrowDown}>
        <Icon
          onPress={onPressDown}
          iconName="DownArrow"
          width={arrowWidth}
          height={arrowHeight}
        />
      </View>
    </View>
  );
};

export default Controller;
