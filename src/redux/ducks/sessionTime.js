import { call, put, takeEvery } from 'redux-saga/effects';
import { API_URL_AVAILABLE_SESSION } from '../../api';

export const FETCH_SESSIONS = 'FETCH_SESSIONS';
export const SET_SELECTED_SESSION = 'SET_SELECTED_SESSION';

export const fetchSessions = () => ({
  type: FETCH_SESSIONS,
});

export const setSelectedSession = (session) => ({
  type: SET_SELECTED_SESSION,
  payload: session,
});

const initialState = {
  sessions: [],
  selectedSession: null,
};

export default function sessionTimeReducer (state = initialState, action){
  switch (action.type) {
    case 'SET_SESSIONS':
      return { ...state, sessions: action.payload };
    case 'SET_SELECTED_SESSION':
      return { ...state, selectedSession: action.payload };
    default:
      return state;
  }
};

export function* fetchSessionsSaga() {
  try {
    const response = yield call(fetch, API_URL_AVAILABLE_SESSION);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = yield response.json();
    yield put({ type: 'SET_SESSIONS', payload: data.sessions });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export function* sessionTimeSaga() {
  yield takeEvery(FETCH_SESSIONS, fetchSessionsSaga);
}

