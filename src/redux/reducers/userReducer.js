const initialState = {
  user: null,
};
const userReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
