import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import { StyledContainer } from '../styled/FilmDescription';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmData } from '../redux/actions/actionsFilmDescription';

const FilmDescription = () => {
    const { filmTitle } = useParams();
    const dispatch = useDispatch();
    const { video, description } = useSelector((state) => state.filmDescription);
  
    useEffect(() => {
      dispatch(fetchFilmData(filmTitle));
    }, [dispatch, filmTitle]);

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
