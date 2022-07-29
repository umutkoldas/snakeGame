import {configureStore} from '@reduxjs/toolkit';
import changeDarkModeReducer from '../reducers/darkModeReducer';
import userReducer from '../reducers/userReducer';

const store = configureStore({
  reducer: {
    darkMode: changeDarkModeReducer,
    user: userReducer,
  },
});

export default store;
