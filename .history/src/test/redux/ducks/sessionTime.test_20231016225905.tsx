import 
{ FETCH_SESSIONS, 
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
});
