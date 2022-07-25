import {configureStore} from '@reduxjs/toolkit';
import changeDarkModeReducer from '../reducers/darkModeReducer';

const store = configureStore({
  reducer: {
    darkMode: changeDarkModeReducer,
  },
});

export default store;
