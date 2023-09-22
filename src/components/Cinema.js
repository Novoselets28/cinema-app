import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../index.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {CinemaScreen, StyledButton} from '../styled/Cinema';
import { useDispatch, useSelector } from 'react-redux';

const Cinema = () => {
  const { date, selectedSession } = useParams();
  const dispatch = useDispatch();
  const availableSeats = useSelector((state) => state.cinema.availableSeats);
  const selectedSeats = useSelector((state) => state.cinema.selectedSeats);

  useEffect(() => {
    // Dispatch an action to fetch available seats.
    dispatch({ type: 'FETCH_AVAILABLE_SEATS' });
  }, [dispatch]);

  const handleSeatSelect = (seat) => {
    // Dispatch an action to toggle selected seat.
    dispatch({ type: 'TOGGLE_SELECTED_SEAT', payload: seat });
  };

  const handleBookSeats = () => {
    alert(`Booked seats: ${selectedSeats.join(', ')} for ${selectedSession}`);
  };

  return (
    <Container>
      <h4>{date}</h4>
      <h2>Select Seats</h2>
      <Row className="seat-container">
      <CinemaScreen className="cinema-screen">Cinema Screen</CinemaScreen>
        {availableSeats.map((seat) => (
          <Col key={seat} xs={2}>
            <StyledButton
              variant={selectedSeats.includes(seat) ? 'success' : 'outline-secondary'}
              onClick={() => handleSeatSelect(seat)}
              className="mb-2"
            >
              {seat}
            </StyledButton>
          </Col>
        ))}
      </Row>
      <div className="confirm-btn">
        <Button variant="primary" onClick={handleBookSeats}>
          Book Selected Seats
        </Button>
      </div>
    </Container>
  );
};

export default Cinema;

