import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import sessionTimeReducer, {
  fetchSessions,
  fetchSessionsSaga,
  setSelectedSession,
} from '../../../redux/ducks/sessionTime';
import { API_URL_AVAILABLE_SESSION } from '../../../api';

const session = { id: 1, time: '10:00 AM' };
const sessions = [{ id: 1, time: '10:00 AM' }, { id: 2, time: '2:00 PM' }];

describe('sessionTime actions', () => {
  it('should create an action to fetch sessions', () => {
    const expectedAction = {
      type: 'FETCH_SESSIONS',
    };

    expect(fetchSessions()).toEqual(expectedAction);
  });

  it('should create an action to set selected session', () => {
    const expectedAction = {
      type: 'SET_SELECTED_SESSION',
      payload: session,
    };

    expect(setSelectedSession(session)).toEqual(expectedAction);
  });

  it('should handle SET_SESSIONS', () => {
    const initialState = {
      sessions: [],
      selectedSession: null,
    };
    const action = { type: 'SET_SESSIONS', payload: sessions };
    const expectedState = {
      sessions: [{ id: 1, time: '10:00 AM' }, { id: 2, time: '2:00 PM' }],
      selectedSession: null,
    };

    expect(sessionTimeReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_SELECTED_SESSION', () => {
    const initialState = {
      sessions: [],
      selectedSession: null,
    };
    const action = { type: 'SET_SELECTED_SESSION', payload: session };
    const expectedState = {
      sessions: [],
      selectedSession: { id: 1, time: '10:00 AM' },
    };

    expect(sessionTimeReducer(initialState, action)).toEqual(expectedState);
  });

  it('should fetch sessions data and dispatch SET_SESSIONS action', () => {
    const responseData = {
      sessions: [
        { id: 1, time: '10:00 AM' },
        { id: 2, time: '2:00 PM' },
      ],
    };

    return expectSaga(fetchSessionsSaga)
      .provide([[call(fetch as any, API_URL_AVAILABLE_SESSION), { ok: true, json: () => responseData }]])
      .put({ type: 'SET_SESSIONS', payload: responseData.sessions })
      .run();
  });
});