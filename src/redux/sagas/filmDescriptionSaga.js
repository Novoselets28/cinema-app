import { call, put, takeLatest } from 'redux-saga/effects';
import { API_URL_SESSION_DETAILS } from '../../api';
import { FETCH_FILM_DATA, setFilmData } from '../actions/actionsFilmDescription';

function* fetchFilmData(action) {
  try {
    const response = yield call(fetch, API_URL_SESSION_DETAILS);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = yield response.json();

    const matchingFilm = data.films.find((film) => film.title === action.payload);

    if (matchingFilm) {
      yield put(setFilmData(matchingFilm.video, matchingFilm.descr));
    } else {
      console.error('Film not found:', action.payload);
    }
  } catch (error) {
    console.error('Error fetching film data:', error);
  }
}

function* filmDescriptionSaga() {
  yield takeLatest(FETCH_FILM_DATA, fetchFilmData);
}

export default filmDescriptionSaga;
