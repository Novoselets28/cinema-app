import { call, put, takeEvery } from 'redux-saga/effects';
import { setPosters } from '../actions/actionsMainPage';
import { API_URL_LIST_OF_FILM } from '../../api.js';

function* fetchPosters() {
  try {
    const response = yield call(fetch, API_URL_LIST_OF_FILM);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = yield response.json();
    const postersArray = data.list.map((film) => film.Poster);
    yield put(setPosters(postersArray));
  } catch (error) {
    console.error('Error fetching posters:', error);
  }
}

function* mainPageSaga() {
  yield takeEvery('FETCH_POSTERS', fetchPosters);
}

export default mainPageSaga;
