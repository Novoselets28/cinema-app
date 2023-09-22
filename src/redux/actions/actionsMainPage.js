export const FETCH_POSTERS = 'FETCH_POSTERS';
export const SET_POSTERS = 'SET_POSTERS';

export const fetchPosters = () => ({
    type: FETCH_POSTERS,
  });
  
  export const setPosters = (posters) => ({
    type: SET_POSTERS,
    payload: posters,
  });
  