const initialState = {
    films: [],
  };
  
  const sessionListReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FILMS':
        return { ...state, films: action.payload };
      default:
        return state;
    }
  };
  
  export default sessionListReducer;