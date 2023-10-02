import { call, put, takeEvery } from 'redux-saga/effects';
import { API_URL_SESSIONS } from '../../api';

export const FETCH_AVAILABLE_DATES = 'FETCH_AVAILABLE_DATES';
export const SET_AVAILABLE_DATES = 'SET_AVAILABLE_DATES';

export interface MovieSessionsState {
  availableDates: string[];
}

export const fetchAvailableDates = (): { type: string } => ({
  type: FETCH_AVAILABLE_DATES,
});
  
  export const setAvailableDates = (dates: any): { type: string, payload: any } => ({
    type: SET_AVAILABLE_DATES,
    payload: dates,
  });

  const initialState: MovieSessionsState = {
    availableDates: [],
  };
  
export default function movieSessionsReducer (state: MovieSessionsState = initialState, action: { type: any; payload: any; }){
    switch (action.type) {
      case 'SET_AVAILABLE_DATES':
        return { ...state, availableDates: action.payload };
      default:
        return state;
    }
  };

export function* fetchAvailableDatesSaga():Generator {
    try {
      const response:any = yield call(fetch, API_URL_SESSIONS);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data:any = yield response.json();
      if (data && data.dates) {
        yield put(setAvailableDates(data.dates));
      }
    } catch (error) {
      console.error('Error fetching available dates:', error);
    }
  }
  
export function* movieSessionsSaga() {
    yield takeEvery(FETCH_AVAILABLE_DATES, fetchAvailableDatesSaga);
  }