export const FETCH_FILMS = 'FETCH_FILMS';
export const SET_FILMS = 'SET_FILMS';

export const fetchFilms = () => ({
    type: FETCH_FILMS,
  });
  
  export const setFilms = (films) => ({
    type: SET_FILMS,
    payload: films,
  });