import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button, Container } from 'react-bootstrap';

import { CinemaScreen, HomeButton, StyledContainer } from '../styled/Cinema';

const Cinema = () => {
  const { date, selectedSession } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const availableSeats = useSelector((state) => state.cinema.availableSeats) || [];
  const selectedSeats = useSelector((state) => state.cinema.selectedSeats);

  const [isAlertActive, setIsAlertActive] = useState(false);

  useEffect(() => {
    dispatch({ type: 'FETCH_AVAILABLE_SEATS' });
  }, [dispatch]);

  const isSeatBooked = (seat) => selectedSeats.includes(seat);


  const handleSeatSelect = (seat) => {
    dispatch({ type: 'TOGGLE_SELECTED_SEAT', payload: seat });
  };

  const handleBookSeats = () => {
    alert(`Booked seats: ${selectedSeats.join(', ')} for ${selectedSession}`);
    setIsAlertActive(true);
  };

  const areSeatsSelected = selectedSeats.length > 0;

  const handleGoMainPage = () => {
    navigate('/');
  };

  return (
    <Container>
      <h4>You selected a film for {date}</h4>
      <h2>Just choose a seat</h2>
      <Row>
        <CinemaScreen>Cinema Screen</CinemaScreen>
        {availableSeats.map((seat) => (
          <Col key={seat} xs={2}>
            <Button
              variant={isSeatBooked(seat) ? 'success' : 'secondary'}
              onClick={() => handleSeatSelect(seat)}
              className="mb-2"
            >
              {seat}
            </Button>
          </Col>
        ))}
      </Row>
      <StyledContainer>
        <Button
          variant="primary"
          onClick={handleBookSeats}
          disabled={!areSeatsSelected}
        >
          {areSeatsSelected ? 'Toggle Selected Seats Success' : 'No Seats Selected'}
        </Button>
        {isAlertActive && (
          <HomeButton variant="info" onClick={handleGoMainPage}>
            Home
          </HomeButton>
        )}
      </StyledContainer>
    </Container>
  );
};

export default Cinema;
