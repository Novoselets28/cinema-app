import { call, put, takeEvery } from 'redux-saga/effects';
import { API_URL_SESSIONS } from '../../api.js';

export const FETCH_AVAILABLE_DATES = 'FETCH_AVAILABLE_DATES';
export const SET_AVAILABLE_DATES = 'SET_AVAILABLE_DATES';

export const fetchAvailableDates = () => ({
    type: FETCH_AVAILABLE_DATES,
  });
  
  export const setAvailableDates = (dates) => ({
    type: SET_AVAILABLE_DATES,
    payload: dates,
  });

  const initialState = {
    availableDates: [],
  };
  
export default function movieSessionsReducer (state = initialState, action){
    switch (action.type) {
      case 'SET_AVAILABLE_DATES':
        return { ...state, availableDates: action.payload };
      default:
        return state;
    }
  };

export function* fetchAvailableDatesSaga() {
    try {
      const response = yield call(fetch, API_URL_SESSIONS);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = yield response.json();
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
  
  
  
  