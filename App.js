import React from 'react';
import SnakeArea from './src/components/SnakeArea';
import store from './src/redux/store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SnakeArea />
    </Provider>
  );
};

export default App;
