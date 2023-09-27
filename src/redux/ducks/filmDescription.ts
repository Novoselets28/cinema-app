import { call, put, takeLatest } from 'redux-saga/effects';
import { API_URL_SESSION_DETAILS } from '../../api';

export const FETCH_FILM_DATA = 'FETCH_FILM_DATA';
export const SET_FILM_DATA = 'SET_FILM_DATA';

export const fetchFilmData = (filmTitle: string) => ({
  type: FETCH_FILM_DATA as typeof FETCH_FILM_DATA,
  payload: filmTitle,
});

export const setFilmData = (video: string, description: string) => ({
  type: SET_FILM_DATA as typeof SET_FILM_DATA,
  payload: { video, description },
});

interface FilmDescriptionState {
  video: string;
  description: string;
}

const initialState: FilmDescriptionState = {
  video: '',
  description: '',
};

export type { FilmDescriptionState };

export default function filmDescriptionReducer(
  state: FilmDescriptionState = initialState,
  action: ReturnType<typeof setFilmData>
): FilmDescriptionState {
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
}

export function* fetchFilmDataSaga(action: ReturnType<typeof fetchFilmData>): Generator<any, void, unknown> {
  try {
    const response: any = yield call(fetch as any, API_URL_SESSION_DETAILS);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data: any = yield response.json();

    const matchingFilm = data.films.find((film: { title: string }) => film.title === action.payload);

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
