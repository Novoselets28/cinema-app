// import { put, call, takeEvery } from 'redux-saga/effects';
// import { API_URL_SEATS } from '../../api';

// export const FETCH_AVAILABLE_SEATS = 'FETCH_AVAILABLE_SEATS';
// export const TOGGLE_SELECTED_SEAT = 'TOGGLE_SELECTED_SEAT';

// export const fetchAvailableSeats = (seats) => ({
//   type: FETCH_AVAILABLE_SEATS,
//   payload: seats,
// });

// export const toggleSelectedSeat = (seat) => ({
//   type: TOGGLE_SELECTED_SEAT,
//   payload: seat,
// });

// const initialState = {
//   availableSeats: [],
//   selectedSeats: [],
// };

// export default function cinemaReducer (state = initialState, action){
//   switch (action.type) {
//     case FETCH_AVAILABLE_SEATS:
//       return { ...state, availableSeats: action.payload };
//     case TOGGLE_SELECTED_SEAT:
//       const seat = action.payload;
//       const isSelected = state.selectedSeats.includes(seat);
//       const selectedSeats = isSelected
//         ? state.selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
//         : [...state.selectedSeats, seat];
//       return { ...state, selectedSeats };
//     default:
//       return state;
//   }
// };

// export function* fetchAvailableSeatsSaga() {
//   try {
//     const response = yield call(fetch, API_URL_SEATS);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = yield response.json();
//     if (data && data.seats) {
//       yield put(fetchAvailableSeats(data.seats));
//     }
//   } catch (error) {
//     console.error('Error fetching available seats:', error);
//   }
// }

// export function* cinemaSaga() {
//   yield takeEvery('FETCH_AVAILABLE_SEATS', fetchAvailableSeatsSaga);
// }


import { put, call, takeEvery } from 'redux-saga/effects';
import { API_URL_SEATS } from '../../api';

export const FETCH_AVAILABLE_SEATS = 'FETCH_AVAILABLE_SEATS';
export const TOGGLE_SELECTED_SEAT = 'TOGGLE_SELECTED_SEAT';

export const fetchAvailableSeats = (seats: string) => ({
  type: FETCH_AVAILABLE_SEATS as typeof FETCH_AVAILABLE_SEATS,
  payload: seats,
});

export const toggleSelectedSeat = (seat: string) => ({
  type: TOGGLE_SELECTED_SEAT as typeof TOGGLE_SELECTED_SEAT,
  payload: seat,
});

// State Type
interface CinemaState {
  availableSeats: string[]
  selectedSeats: string[];
}

const initialState: CinemaState = {
  availableSeats: [],
  selectedSeats: [],
};

export default function cinemaReducer (state:CinemaState = initialState, action: { type: string; payload: any; }){
  switch (action.type) {
    case FETCH_AVAILABLE_SEATS:
      return { ...state, availableSeats: action.payload };
    case TOGGLE_SELECTED_SEAT:
      const seat = action.payload;
      const isSelected = state.selectedSeats.includes(seat);
      const selectedSeats = isSelected
        ? state.selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
        : [...state.selectedSeats, seat];
      return { ...state, selectedSeats };
    default:
      return state;
  }
};

export function* fetchAvailableSeatsSaga():Generator {
  try {
    const response: any = yield call(fetch as any, API_URL_SEATS);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data:any = yield response.json();
    if (data && data.seats) {
      yield put(fetchAvailableSeats(data.seats));
    }
  } catch (error) {
    console.error('Error fetching available seats:', error);
  }
}

export function* cinemaSaga() {
  yield takeEvery('FETCH_AVAILABLE_SEATS', fetchAvailableSeatsSaga);
}


