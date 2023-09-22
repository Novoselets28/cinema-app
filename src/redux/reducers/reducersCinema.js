import { SET_AVAILABLE_SEATS, TOGGLE_SELECTED_SEAT } from '../actions/actionsCinema';

const initialState = {
  availableSeats: [],
  selectedSeats: [],
};

const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AVAILABLE_SEATS:
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

export default cinemaReducer;
