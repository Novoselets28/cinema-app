import { call, put, takeEvery } from 'redux-saga/effects';
import { API_URL_AVAILABLE_SESSION } from '../../api';

export const FETCH_SESSIONS = 'FETCH_SESSIONS';
export const SET_SELECTED_SESSION = 'SET_SELECTED_SESSION';

export const fetchSessions = (): { type: string } => ({
  type: FETCH_SESSIONS
});

export const setSelectedSession = (session: string): { type: string, payload: string } => ({
  type: SET_SELECTED_SESSION,
  payload: session
});

interface SessionTimeState {
  sessions: string;
  selectedSession: string;
}


const initialState: SessionTimeState = {
  sessions: '',
  selectedSession: ''
};

export default function sessionTimeReducer(
  state: SessionTimeState = initialState,
  action: { type: string; payload: string }
): SessionTimeState {
  switch (action.type) {
    case 'SET_SESSIONS':
      return { ...state, sessions: action.payload };
    case 'SET_SELECTED_SESSION':
      return { ...state, selectedSession: action.payload };
    default:
      return state;
  }
}

export function* fetchSessionsSaga() {
  try {
    const response: Response = yield call(fetch as any, API_URL_AVAILABLE_SESSION);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data: {sessions: string[]} = yield response.json();
    if (data && data.sessions) {
      yield put({ type: 'SET_SESSIONS', payload: data.sessions });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export function* sessionTimeSaga(): Generator {
  yield takeEvery(FETCH_SESSIONS, fetchSessionsSaga);
}