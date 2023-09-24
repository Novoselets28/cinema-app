import React, { useEffect } from 'react';
import { Carousel, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledContainer, StyledRow } from '../styled/MainPage';
import MovieSessions from './MovieSessions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosters } from '../redux/ducks/mainPage';

const MainPage = () => {
  const posters = useSelector((state) => state.mainPage.posters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosters()); 
  }, [dispatch]);

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