import { call, put, takeEvery } from 'redux-saga/effects';
import { API_URL_LIST_OF_FILM } from '../../api.js';

export const FETCH_POSTERS = 'FETCH_POSTERS';
export const SET_POSTERS = 'SET_POSTERS';

export const fetchPosters = () => ({
    type: FETCH_POSTERS,
  });
  
  export const setPosters = (posters) => ({
    type: SET_POSTERS,
    payload: posters,
  });
  
  const initialState = {
    posters: [],
  };
  
 export default function mainPageReducer (state = initialState, action){
    switch (action.type) {
      case 'SET_POSTERS':
        return { ...state, posters: action.payload };
      default:
        return state;
    }
  };
  
  export function* fetchPostersDataSaga() {
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
  
 export function* mainPageSaga() {
    yield takeEvery('FETCH_POSTERS', fetchPostersDataSaga);
  }

// mainPage.ts
// import { call, put, takeEvery } from 'redux-saga/effects';

// // Constants
// export const API_URL_LIST_OF_FILM = '/your-api-url';

// // Action Types
// export const FETCH_POSTERS = 'mainPage/FETCH_POSTERS';
// export const SET_POSTERS = 'mainPage/SET_POSTERS';

// // Action Creators
// export const fetchPosters = () => ({
//   type: FETCH_POSTERS as typeof FETCH_POSTERS, // Use typeof to specify the action type
// });

// export const setPosters = (posters: string[]) => ({
//   type: SET_POSTERS as typeof SET_POSTERS, // Use typeof to specify the action type
//   payload: posters,
// });

// // State Type
// export interface MainPageState {
//   posters: string[];
// }

// // Reducer
// const initialState: MainPageState = {
//   posters: [],
// };

// export default function mainPageReducer(
//   state = initialState,
//   action: ActionTypes
// ): MainPageState {
//   switch (action.type) {
//     case SET_POSTERS:
//       return { ...state, posters: action.payload };
//     default:
//       return state;
//   }
// }

// // Action Types
// type ActionTypes = ReturnType<typeof fetchPosters | typeof setPosters>;

// // Sagas
// export function* fetchPostersDataSaga(): Generator<unknown, void, any> {
//   try {
//     const response = yield call(fetch, API_URL_LIST_OF_FILM);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = yield response.json();
//     const postersArray = data.list.map((film: any) => film.Poster); // Adjust the 'film' type accordingly
//     yield put(setPosters(postersArray));
//   } catch (error) {
//     console.error('Error fetching posters:', error);
//   }
// }


// export function* mainPageSaga() {
//   yield takeEvery(FETCH_POSTERS, fetchPostersDataSaga);
// }

