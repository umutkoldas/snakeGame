const INITIAL_STATE = true;

const changeDarkModeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_DARK_MODE':
      return !state;
    default:
      return state;
  }
};

export default changeDarkModeReducer;
