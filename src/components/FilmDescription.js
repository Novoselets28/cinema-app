import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import { API_URL_SESSION_DETAILS } from '../api';
import { StyledContainer } from '../styled/FilmDescription';

const FilmDescription = () => {
  const { filmTitle } = useParams();

  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch(API_URL_SESSION_DETAILS)
      .then((response) => response.json())
      .then((data) => {
        const matchingFilm = data.films.find((film) => film.title === filmTitle);

        if (matchingFilm) {
          setVideo(matchingFilm.video);
          setDescription(matchingFilm.descr);
        } else {
          console.error('Film not found:', filmTitle);
        }
      })
      .catch((error) => {
        console.error('Error fetching film data:', error);
      });
  }, [filmTitle]);

  const navigate = useNavigate()
  const goBack = () => navigate(-1);

  return (
    <StyledContainer>
      <Row>
        <Col>
          <iframe
            width="560"
            height="315"
            src={video}
            title={filmTitle}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h3>{filmTitle}</h3>
          <p>{description}</p>
          <Button variant="primary" onClick={goBack}>Go back</Button>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default FilmDescription;
