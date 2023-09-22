import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilmBox from './FilmBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledContainer, StyledRow } from '../styled/SessionList';

const SessionList = () => {
  const films = useSelector((state) => state.sessionList.films);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_FILMS'});
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
