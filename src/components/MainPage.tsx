import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { StyledContainer, StyledRow } from '../styled/MainPage';

import { fetchPosters } from '../redux/ducks/mainPage';
import MovieSessions from './MovieSessions';

interface MainPageProps {
  mainPage: string;
  selectedSession: string;
}

const MainPage: React.FC<MainPageProps> = () => {
  const posters: string[] = useSelector((state: any) => state.mainPage.posters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosters());
  }, [dispatch]);

  return (
    <StyledContainer fluid>
      <MovieSessions />
      <StyledRow>
        <Col xs={12} md={6} lg={4} xxl={3}>
          <Carousel>
            {posters.map((poster: string, index: number) => (
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