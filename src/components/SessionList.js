import React, { useEffect, useState } from 'react'
import FilmBox from './FilmBox'
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledContainer, StyledRow } from '../styled/SessionList';


function SessionList() {


  const [films, setFilms] = useState([])

  useEffect(() => {
        // Fetch data from the API
        fetch('https://demo7324815.mockable.io/available/films')
          .then((response) => response.json())
          .then((data) => setFilms(data.list))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);

  return (
    <StyledContainer className="center-grid">
      <StyledRow>
        {films.map((filmReq)=>
          <FilmBox key={filmReq.id} {...filmReq} />)}
      </StyledRow>
      
    </StyledContainer>
  )
}

export default SessionList









