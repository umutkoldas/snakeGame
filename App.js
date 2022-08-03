import React from 'react';
import SnakeArea from './src/components/SnakeArea';
import {useSelector} from 'react-redux';
import SignInScreen from './src/screens/signInScreen';

const App = () => {
  const user = useSelector(state => state.user.user);
  console.log(user, 'App.js');
  return user ? <SnakeArea /> : <SignInScreen />;
};

export default App;
