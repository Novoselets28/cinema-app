export const fetchAvailableDates = () => ({
    type: 'FETCH_AVAILABLE_DATES',
  });
  
  export const setAvailableDates = (dates) => ({
    type: 'SET_AVAILABLE_DATES',
    payload: dates,
  });
  