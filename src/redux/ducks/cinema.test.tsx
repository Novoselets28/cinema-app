import cinemaReducer, {
    fetchAvailableSeats,
    toggleSelectedSeat,
  } from './cinema'; // Import your reducer and action creators
  
  describe('Cinema Reducer', () => {
    it('should return the initial state', () => {
      expect(cinemaReducer(undefined, {} as any)).toEqual({
        availableSeats: [],
        selectedSeats: [],
      });
    });
  
    it('should handle FETCH_AVAILABLE_SEATS', () => {
      const seats = ['A1', 'A2', 'B1'];
      const action = fetchAvailableSeats(seats);
      expect(cinemaReducer(undefined, action)).toEqual({
        availableSeats: seats,
        selectedSeats: [],
      });
    });
  
    it('should handle TOGGLE_SELECTED_SEAT when seat is not selected', () => {
        const initialState = {
          availableSeats: [],
          selectedSeats: [],
        };
        const seat = 'A1';
        const action = toggleSelectedSeat(seat);
        expect(cinemaReducer(initialState, action)).toEqual({
          availableSeats: [],
          selectedSeats: ['A1'], // Expecting 'A1' to be added to the selected seats.
        });
      });
      
  
    it('should handle TOGGLE_SELECTED_SEAT when seat is already selected', () => {
      const initialState = {
        availableSeats: ['A1', 'A2', 'B1'],
        selectedSeats: ['A1'],
      };
      const seat = 'A1';
      const action = toggleSelectedSeat(seat);
      expect(cinemaReducer(initialState, action)).toEqual({
        availableSeats: ['A1', 'A2', 'B1'],
        selectedSeats: [],
      });
    });
  });
  