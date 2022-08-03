import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Icon from '../../icons/icon';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch, useSelector} from 'react-redux';

GoogleSignin.configure({
  iosClientId:
    '975611257290-dt0kulv6fp0et5t860l618r8cet905es.apps.googleusercontent.com',
});

const SignInScreen = () => {
  const dispatch = useDispatch();

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    function onAuthStateChanged(user) {
      dispatch({type: 'SET_USER', payload: user});
    }
    // Sign-in the user with the credential
    return (
      auth().signInWithCredential(googleCredential),
      auth().onAuthStateChanged(onAuthStateChanged)
    );
  }
  const [displayName, setDisplayName] = useState(null);

  const loginWithForm = value => {
    dispatch({type: 'SET_USER', payload: {displayName: displayName}});
  };

  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../icons/loginScreenBackground.gif')}>
        <TextInput
          autoCorrect={false}
          onChangeText={value => setDisplayName(value)}
          style={styles.textInput}
          placeholder="iki ayaklı yılan..."
          placeholderTextColor="white"
        />
        <View style={styles.loginTextView}>
          <TouchableOpacity onPress={() => loginWithForm()}>
            <Text style={styles.loginText}>GİRİS YAP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginOptionsView}>
          <TouchableOpacity
            onPress={() => onGoogleButtonPress()}
            style={styles.loginGmail}>
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
