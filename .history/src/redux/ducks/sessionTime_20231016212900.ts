import { call, put, takeEvery } from 'redux-saga/effects';
import { API_URL_AVAILABLE_SESSION } from '../../api';

export const FETCH_SESSIONS = 'FETCH_SESSIONS';
export const SET_SELECTED_SESSION = 'SET_SELECTED_SESSION';

export const fetchSessions = () => ({
  type: FETCH_SESSIONS as typeof FETCH_SESSIONS
});

export const setSelectedSession = (session: string) => ({
  type: SET_SELECTED_SESSION as typeof SET_SELECTED_SESSION,
  payload: session
});

interface SessionTimeState {
  sessions: string;
  selectedSession: string | null;
}

const initialState: SessionTimeState = {
  sessions: '',
  selectedSession: null
};

export default function sessionTimeReducer(
  state: SessionTimeState = initialState,
  action: { type: string; payload: string | string[] | null }
): SessionTimeState {
  switch (action.type) {
    case FETCH_SESSIONS:
      return { ...state, sessions: action.payload as string };
    case SET_SELECTED_SESSION:
      return { ...state, selectedSession: action.payload as string };
    default:
      return state;
  }
}

export function* fetchSessionsSaga() {
  try {
    const response: Response = yield call(fetch, API_URL_AVAILABLE_SESSION);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data: { sessions: string } = yield response.json();
    if (data && data.sessions) {
      yield put(setSelectedSession(data.sessions[0]));
      yield put({ type: FETCH_SESSIONS, payload: data.sessions });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export function* sessionTimeSaga(): Generator {
  yield takeEvery(FETCH_SESSIONS, fetchSessionsSaga);
}
