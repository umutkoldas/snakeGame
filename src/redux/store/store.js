import {combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createStore} from '@reduxjs/toolkit';
import changeDarkModeReducer from '../reducers/darkModeReducer';
import userReducer from '../reducers/userReducer';

const reducer = combineReducers({
  user: userReducer,
  darkMode: changeDarkModeReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
