import { call, put, takeEvery } from 'redux-saga/effects';
import { API_URL_LIST_OF_FILM } from '../../api';

export const FETCH_FILMS_LIST = 'FETCH_FILMS_LIST';
export const SET_FILMS_LIST = 'SET_FILMS_LIST';

export const fetchFilmsList = () => ({
    type: FETCH_FILMS_LIST,
  });
  
  export const setFilmsList = (films) => ({
    type: SET_FILMS_LIST,
    payload: films,
  });


  const initialState = {
    films: [],
  };
  
export default function sessionListReducer (state = initialState, action){
    switch (action.type) {
      case 'SET_FILMS_LIST':
        return { ...state, films: action.payload };
      default:
        return state;
    }
  };


  
export function* fetchFilmsListSaga() {
    try {
      const response = yield call(fetch, API_URL_LIST_OF_FILM);
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const data = yield response.json();
      yield put(setFilmsList(data.list));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
export function* sessionListSaga() {
    yield takeEvery('FETCH_FILMS_LIST', fetchFilmsListSaga);
  }
  
