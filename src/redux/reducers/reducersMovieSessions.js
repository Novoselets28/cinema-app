const initialState = {
    availableDates: [],
  };
  
  const movieSessionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_AVAILABLE_DATES':
        return { ...state, availableDates: action.payload };
      default:
        return state;
    }
  };
  
  export default movieSessionsReducer;
  