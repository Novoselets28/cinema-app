export const FETCH_FILM_DATA = 'FETCH_FILM_DATA';
export const SET_FILM_DATA = 'SET_FILM_DATA';

export const fetchFilmData = (filmTitle) => ({
  type: FETCH_FILM_DATA,
  payload: filmTitle,
});

export const setFilmData = (video, description) => ({
  type: SET_FILM_DATA,
  payload: { video, description },
});
