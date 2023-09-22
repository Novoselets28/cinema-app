

// Action types
export const SET_AVAILABLE_SEATS = 'SET_AVAILABLE_SEATS';
export const TOGGLE_SELECTED_SEAT = 'TOGGLE_SELECTED_SEAT';

// Action creators
export const setAvailableSeats = (seats) => ({
  type: SET_AVAILABLE_SEATS,
  payload: seats,
});

export const toggleSelectedSeat = (seat) => ({
  type: TOGGLE_SELECTED_SEAT,
  payload: seat,
});
