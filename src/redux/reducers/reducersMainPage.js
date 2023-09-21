const initialState = {
    posters: [],
  };
  
  const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_POSTERS':
        return { ...state, posters: action.payload };
      default:
        return state;
    }
  };
  
  export default mainPageReducer;
  