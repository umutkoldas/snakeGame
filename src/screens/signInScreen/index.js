import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from '../../icons/icon';

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../icons/loginScreenBackground.gif')}>
        <TextInput
          style={styles.textInput}
          placeholder="iki ayaklı yılan..."
          placeholderTextColor="white"
        />
        <View style={styles.loginTextView}>
          <TouchableOpacity>
            <Text style={styles.loginText}>GİRİS YAP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginOptionsView}>
          <TouchableOpacity style={styles.loginGmail}>
            <Icon iconName="Google" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginFacebook}>
            <Icon iconName="Facebook" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignInScreen;
