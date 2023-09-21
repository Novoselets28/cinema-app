
// const initialState = {
//     sessions: [],
//     selectedSession: null,
//   };
  
//   const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SET_SESSIONS':
//         return { ...state, sessions: action.payload };
//       case 'SET_SELECTED_SESSION':
//         return { ...state, selectedSession: action.payload };
//       default:
//         return state;
//     }
//   };
  
//   export default rootReducer;
  
const initialState = {
  sessions: [],
  selectedSession: null,
};

const sessionTimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SESSIONS':
      return { ...state, sessions: action.payload };
    case 'SET_SELECTED_SESSION':
      return { ...state, selectedSession: action.payload };
    default:
      return state;
  }
};

export default sessionTimeReducer;