import { put, call, takeEvery } from 'redux-saga/effects';
import { setAvailableSeats } from '../actions/actionsCinema';
import { API_URL_SEATS } from '../../api';

function* fetchAvailableSeats() {
  try {
    const response = yield call(fetch, API_URL_SEATS);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = yield response.json();
    if (data && data.seats) {
      yield put(setAvailableSeats(data.seats));
    }
  } catch (error) {
    console.error('Error fetching available seats:', error);
  }
}

function* cinemaSaga() {
  yield takeEvery('FETCH_AVAILABLE_SEATS', fetchAvailableSeats);
}

export default cinemaSaga;
