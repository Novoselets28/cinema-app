import { call, put, takeEvery } from 'redux-saga/effects';
import { API_URL_LIST_OF_FILM } from '../../api';

export const FETCH_FILMS_LIST = 'FETCH_FILMS_LIST';
export const SET_FILMS_LIST = 'SET_FILMS_LIST';

export interface Film {
  id: number;
  Title: string;
  Poster: string;
}

export const fetchFilmsList = () => ({
  type: FETCH_FILMS_LIST as typeof FETCH_FILMS_LIST
});

export const setFilmsList = (films: Film[]) => ({
  type: SET_FILMS_LIST as typeof SET_FILMS_LIST,
  payload: films
});

interface SessionListState {
  films: Film[];
}

const initialState: SessionListState = {
  films: []
};

export default function sessionListReducer(
  state: SessionListState = initialState,
  action: { type: string; payload: Film[] }
): SessionListState {
  switch (action.type) {
    case SET_FILMS_LIST:
      return { ...state, films: action.payload };
    default:
      return state;
  }
}

export function* fetchFilmsListSaga() {
  try {
    const response: Response = yield call(fetch, API_URL_LIST_OF_FILM);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data: { list: Film[] } = yield response.json();
    yield put(setFilmsList(data.list));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export function* sessionListSaga() {
  yield takeEvery(FETCH_FILMS_LIST, fetchFilmsListSaga);
}
