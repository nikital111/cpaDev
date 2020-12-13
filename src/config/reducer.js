const initialState = {
    isLogin:false,
    userData: {}
  };
  
  const reduce = (state = initialState, action) => {
    switch (action.type) {
      case "IS_LOGIN": {
        return {
          ...state,
          isLogin: !state.isLogin
        };
      }

      case "SET_DATA": {
        return {
          ...state,
          userData: action.payload
        };
      }
  
      default:
        return state;
    }
  };
  
  export default reduce;