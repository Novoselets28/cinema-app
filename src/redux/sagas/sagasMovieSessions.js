import { call, put, takeEvery } from 'redux-saga/effects';
import { setAvailableDates } from '../actions/actionsMovieSessions';
import { API_URL_SESSIONS } from '../../api.js';

function* fetchAvailableDates() {
  try {
    const response = yield call(fetch, API_URL_SESSIONS);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = yield response.json();
    if (data && data.dates) {
      yield put(setAvailableDates(data.dates));
    }
  } catch (error) {
    console.error('Error fetching available dates:', error);
  }
}

function* movieSessionsSaga() {
  yield takeEvery('FETCH_AVAILABLE_DATES', fetchAvailableDates);
}

export default movieSessionsSaga;
