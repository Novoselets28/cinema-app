import movieSessionsReducer, {
  fetchAvailableDates,
  setAvailableDates
} from '../../../redux/ducks/movieSessions';

describe('movieSessions actions', () => {
  it('should create an action to fetch available dates', () => {
    const expectedAction = {
      type: 'FETCH_AVAILABLE_DATES'
    };

    expect(fetchAvailableDates()).toEqual(expectedAction);
  });

  it('should create an action to set available dates', () => {
    const dates = ['2023-10-01', '2023-10-02'];
    const expectedAction = {
      type: 'SET_AVAILABLE_DATES',
      payload: dates
    };

    expect(setAvailableDates(dates)).toEqual(expectedAction);
  });

  it('should handle SET_AVAILABLE_DATES', () => {
    const initialState = {
      availableDates: []
    };
    const dates = ['2023-10-01', '2023-10-02'];
    const action = setAvailableDates(dates);
    const expectedState = {
      availableDates: ['2023-10-01', '2023-10-02']
    };
    
    expect(movieSessionsReducer(initialState, action)).toEqual(expectedState);
  });
});