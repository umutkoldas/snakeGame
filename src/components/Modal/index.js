import {Text, Modal, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch, useSelector} from 'react-redux';

const ModalGameOver = ({
  visible,
  transparent,
  animationType,
  score,
  onPress,
  onPressRestart,
}) => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log('aslan');
      dispatch({type: 'SET_USER', payload: null});
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal
      visible={visible}
      transparent={transparent}
      animationType={animationType}>
      <View style={styles.transparentModalView}>
        <View style={styles.gameOverModal}>
          <Text>{user.displayName}</Text>
          <Text style={styles.scoreText}>Score: {score}</Text>
          <View style={styles.twoButtonView}>
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressRestart}>
              <Text style={styles.buttonText}>Restart</Text>
            </TouchableOpacity>
          </View>
          <Text onPress={signOut}>Çıkış</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalGameOver;
