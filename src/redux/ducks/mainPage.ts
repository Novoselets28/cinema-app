import { call, put, takeEvery } from 'redux-saga/effects';
import { API_URL_LIST_OF_FILM } from '../../api';

const FETCH_POSTERS = 'mainPage/FETCH_POSTERS';
const SET_POSTERS = 'mainPage/SET_POSTERS';

export const fetchPosters = () => ({
  type: FETCH_POSTERS as typeof FETCH_POSTERS,
});

export const setPosters = (posters: string[]) => ({
  type: SET_POSTERS as typeof SET_POSTERS,
  payload: posters,
});

interface MainPageState {
  posters: string[];
}

const initialState: MainPageState = {
  posters: [],
};

export default function mainPageReducer(state = initialState, action: MainPageActionTypes): MainPageState {
  switch (action.type) {
    case SET_POSTERS:
      return { ...state, posters: action.payload };
    default:
      return state;
  }
}

type MainPageActionTypes = ReturnType<typeof fetchPosters | typeof setPosters>;

export function* fetchPostersDataSaga(): Generator {
  try {
    const response: any = yield call(fetch, API_URL_LIST_OF_FILM);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: any = yield response.json();
    const postersArray = data.list.map((film: any) => film.Poster);
    yield put(setPosters(postersArray));
  } catch (error) {
    console.error('Error fetching posters:', error);
  }
}

export function* mainPageSaga() {
  yield takeEvery(FETCH_POSTERS, fetchPostersDataSaga);
}