import React, {useState} from 'react';
import SnakeArea from './src/components/SnakeArea';
import store from './src/redux/store/store';
import {Provider} from 'react-redux';
import SignInScreen from './src/screens/signInScreen';

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <Provider store={store}>
      {login ? <SnakeArea /> : <SignInScreen />}
    </Provider>
  );
};

export default App;
