// import { call } from 'redux-saga/effects';
// import { expectSaga } from 'redux-saga-test-plan';

// import sessionTimeReducer, {
//   fetchSessions,
//   fetchSessionsSaga,
//   setSelectedSession
// } from '../../../redux/ducks/sessionTime';
// import { API_URL_AVAILABLE_SESSION } from '../../../api';

// const session = '10:00 AM'; // Modify session to be a string
// const sessions = ['10:00 AM', '2:00 PM']; // Modify sessions to be an array of strings

// describe('sessionTime actions', () => {
//   it('should create an action to fetch sessions', () => {
//     const expectedAction = {
//       type: 'FETCH_SESSIONS'
//     };

//     expect(fetchSessions()).toEqual(expectedAction);
//   });

//   it('should create an action to set selected session', () => {
//     const expectedAction = {
//       type: 'SET_SELECTED_SESSION',
//       payload: session
//     };

//     expect(setSelectedSession(session)).toEqual(expectedAction);
//   });

//   it('should handle SET_SESSIONS', () => {
//     const initialState = {
//       sessions: '',
//       selectedSession: null
//     };
//     const action = { type: 'SET_SESSIONS', payload: sessions };
//     const expectedState = {
//       sessions: ['10:00 AM', '2:00 PM'],
//       selectedSession: null
//     };

//     expect(sessionTimeReducer(initialState, action)).toEqual(expectedState);
//   });
// });
