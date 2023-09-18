// SessionList.js
import React, { useEffect, useState } from 'react';
import FilmBox from './FilmBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledContainer, StyledRow } from '../styled/SessionList';
import {API_URL_LIST_OF_FILM} from '../api';

const SessionList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch(API_URL_LIST_OF_FILM)
      .then((response) => response.json())
      .then((data) => setFilms(data.list))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <StyledContainer className="center-grid">
      <StyledRow>
        {films.map((filmReq) => (
          <FilmBox key={filmReq.id} {...filmReq} />
        ))}
      </StyledRow>
    </StyledContainer>
  );
}

export default SessionList;
