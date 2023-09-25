import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import FilmBox from './FilmBox';
import { StyledContainer, StyledRow } from '../styled/SessionList';

import { fetchFilmsList } from '../redux/ducks/sessionList';

const SessionList = () => {
  const films = useSelector((state) => state.sessionList.films);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilmsList());
  }, [dispatch]);

  return (
    <StyledContainer className="center-grid">
      <StyledRow>
      {films.length === 0 ? (
          <div>Loading...</div>
        ) : (
          films.map((filmReq) => (
            <FilmBox key={filmReq.id} {...filmReq} />
          ))
        )}
      </StyledRow>
    </StyledContainer>
  );
};

export default SessionList;
