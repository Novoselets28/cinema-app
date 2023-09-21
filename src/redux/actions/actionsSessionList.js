export const fetchFilms = () => ({
    type: 'FETCH_FILMS',
  });
  
  export const setFilms = (films) => ({
    type: 'SET_FILMS',
    payload: films,
  });