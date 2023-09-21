import { call, put, takeEvery } from 'redux-saga/effects';
import { setFilms } from '../actions/actionsSessionList';
import { API_URL_LIST_OF_FILM } from '../../api';

function* fetchFilms() {
  try {
    const response = yield call(fetch, API_URL_LIST_OF_FILM);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = yield response.json();
    yield put(setFilms(data.list));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function* sessionListSaga() {
  yield takeEvery('FETCH_FILMS', fetchFilms);
}

export default sessionListSaga;