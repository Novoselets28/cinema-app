import { call, put, takeEvery } from 'redux-saga/effects';
import { API_URL_AVAILABLE_SESSION } from '../../api';

export const FETCH_SESSIONS = 'FETCH_SESSIONS';
export const SET_SELECTED_SESSION = 'SET_SELECTED_SESSION';

export const fetchSessions = (): { type: string } => ({
  type: FETCH_SESSIONS,
});

export const setSelectedSession = (session: any): { type: string, payload: any } => ({
  type: SET_SELECTED_SESSION,
  payload: session,
});

interface SessionTimeState {
  sessions: any[];
  selectedSession: any;
}


const initialState: SessionTimeState = {
  sessions: [],
  selectedSession: null,
};

export default function sessionTimeReducer(
  state: SessionTimeState = initialState,
  action: { type: string; payload: any }
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

export function* fetchSessionsSaga(): Generator {
  try {
    const response: any = yield call(fetch as any, API_URL_AVAILABLE_SESSION);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data: any = yield response.json();
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