import 
sessionTimeReducer, { FETCH_SESSIONS, 
  SET_SELECTED_SESSION, 
  fetchSessions, 
  setSelectedSession } from '../../../redux/ducks/sessionTime';

describe('SessionTime Actions', () => {
  it('should create an action to fetch sessions', () => {
    const expectedAction = {
      type: FETCH_SESSIONS
    };

    expect(fetchSessions()).toEqual(expectedAction);
  });

  it('should create an action to set selected session', () => {
    const session = 'Session 1';
    const expectedAction = {
      type: SET_SELECTED_SESSION,
      payload: session
    };

    expect(setSelectedSession(session)).toEqual(expectedAction);
  });
  it('should handle FETCH_SESSIONS', () => {
    const initialState = {
      sessions: [],
      selectedSession: null
    };

    const action = {
      type: FETCH_SESSIONS,
      payload: ['Session 1', 'Session 2']
    };

    const expectedState = {
      sessions: ['Session 1', 'Session 2'],
      selectedSession: null
    };

    expect(sessionTimeReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_SELECTED_SESSION', () => {
    const initialState = {
      sessions: [],
      selectedSession: null
    };

    const action = {
      type: SET_SELECTED_SESSION,
      payload: 'Session 1'
    };

    const expectedState = {
      sessions: [],
      selectedSession: 'Session 1'
    };

    expect(sessionTimeReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle unknown action type', () => {
    const initialState = {
      sessions: [],
      selectedSession: null
    };

    const action = {
      type: 'UNKNOWN_ACTION',
      payload: 'Session 1'
    };

    expect(sessionTimeReducer(initialState, action)).toEqual(initialState);
  });
});
