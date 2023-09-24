import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import '../index.css';
import { Row, Col, Button } from 'react-bootstrap';
import {CinemaScreen, HomeButton, StyledButton, StyledContainer} from '../styled/Cinema';
import { useDispatch, useSelector } from 'react-redux';

const Cinema = () => {
  const { date, selectedSession } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const availableSeats = useSelector((state) => state.cinema.availableSeats);
  const selectedSeats = useSelector((state) => state.cinema.selectedSeats);


  const [isAlertActive, setIsAlertActive] = useState(false);


  useEffect(() => {
    // Dispatch an action to fetch available seats.
    dispatch({ type: 'FETCH_AVAILABLE_SEATS' });
  }, [dispatch]);


  const isSeatBooked = (seat) => {
    return selectedSeats.includes(seat);
  };

  const handleSeatSelect = (seat) => {
      dispatch({ type: 'TOGGLE_SELECTED_SEAT', payload: seat });

  };

  const handleBookSeats = () => {
    alert(`Booked seats: ${selectedSeats.join(', ')} for ${selectedSession}`);
    setIsAlertActive(true)
  };

  const areSeatsSelected = selectedSeats.length > 0;

  const handleGoMainPage = () => {
    navigate('/');
  };


  return (
    <StyledContainer>
      <h4>You selected film for {date}</h4>
      <h2>Just choose a seat</h2>
      <Row className="seat-container">
      <CinemaScreen className="cinema-screen">Cinema Screen</CinemaScreen>
        {availableSeats.map((seat) => (
          <Col key={seat} xs={2}>
            <StyledButton
              variant={isSeatBooked(seat) ? 'success' : 'secondary'}
              onClick={() => handleSeatSelect(seat)}
              className="mb-2"
            >
              {seat}
            </StyledButton>
          </Col>
        ))}
      </Row>
      <div className="confirm-btn">
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
      </div>
    </StyledContainer>
  );
};

export default Cinema;

