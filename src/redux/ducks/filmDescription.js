import { call, put, takeLatest } from 'redux-saga/effects';
import { API_URL_SESSION_DETAILS } from '../../api';

export const FETCH_FILM_DATA = 'FETCH_FILM_DATA';
export const SET_FILM_DATA = 'SET_FILM_DATA';

export const fetchFilmData = (filmTitle) => ({
  type: FETCH_FILM_DATA,
  payload: filmTitle,
});

export const setFilmData = (video, description) => ({
  type: SET_FILM_DATA,
  payload: { video, description },
});

const initialState = {
  video: '',
  description: '',
};

export default function filmDescriptionReducer (state = initialState, action){
  switch (action.type) {
    case SET_FILM_DATA:
      return {
        ...state,
        video: action.payload.video,
        description: action.payload.description,
      };
    default:
      return state;
  }
};

export function* fetchFilmDataSaga(action) {
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

export function* filmDescriptionSaga() {
  yield takeLatest(FETCH_FILM_DATA, fetchFilmDataSaga);
}

