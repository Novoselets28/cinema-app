import React, { useState, useEffect } from 'react';
import { Carousel, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledContainer, StyledRow } from '../styled/MainPage';
import MovieSessions from './MovieSessions';
import {API_URL_LIST_OF_FILM} from '../api';

const MainPage = () => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    fetch(API_URL_LIST_OF_FILM)
      .then((response) => response.json())
      .then((data) => {
        const postersArray = data.list.map((film) => film.Poster);
        setPosters(postersArray);
      })
      .catch((error) => console.error('Error fetching posters:', error));
  }, []);

  return (
    <StyledContainer fluid>
        <MovieSessions/>
        <StyledRow>
        <Col xs={12} md={6} lg={4} xxl={3}>
            <Carousel>
            {posters.map((poster, index) => (
            <Carousel.Item key={index}>
                <img className="d-block w-100" src={poster} alt={`Poster ${index + 1}`} />
            </Carousel.Item>
            ))}
        </Carousel>
        </Col>
    </StyledRow>
    </StyledContainer>
    
        
  );
};

export default MainPage;
