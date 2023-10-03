import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import FilmBox from './FilmBox';

import { fetchFilmsList } from '../redux/ducks/sessionList';
import { StyledContainer, StyledRow } from '../styled/SessionList';

interface Film {
  id: number;
}

interface SessionListState {
  sessionList: any;
  films: Film[];
}

interface SessionListProps {
  date: string;
}

const SessionList: React.FC<SessionListProps> = () => {
  const films = useSelector((state: SessionListState) => state.sessionList.films);
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
          films.map((filmReq: Film) => (
            <FilmBox Title={''} Poster={''} key={filmReq.id} {...filmReq} />
          ))
        )}
      </StyledRow>
    </StyledContainer>
  );
};

export default SessionList;


