import {Text, Modal, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const ModalGameOver = ({
  visible,
  transparent,
  animationType,
  score,
  onPress,
  onPressRestart,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={transparent}
      animationType={animationType}>
      <View style={styles.transparentModalView}>
        <View style={styles.gameOverModal}>
          <Text style={styles.scoreText}>Score: {score}</Text>
          <View style={styles.twoButtonView}>
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressRestart}>
              <Text style={styles.buttonText}>Restart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalGameOver;
