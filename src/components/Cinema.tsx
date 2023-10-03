import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button, Container } from 'react-bootstrap';

import { CinemaScreen, HomeButton, StyledContainer } from '../styled/Cinema';
import { fetchAvailableSeats } from '../redux/ducks/cinema';

interface CinemaProps {
  date: string;
  selectedSession: string;
}

const Cinema: React.FC<CinemaProps> = () => {
  const { date, selectedSession } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const availableSeats:string[] = useSelector((state: any) => state.cinema.availableSeats) || [];
  const selectedSeats:string[] = useSelector((state: any) => state.cinema.selectedSeats);

  const [isAlertActive, setIsAlertActive] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchAvailableSeats([]));
  }, [dispatch]);

  const isSeatBooked = (seat: string):boolean => selectedSeats.includes(seat);

  const handleSeatSelect = (seat:string):void => {
    dispatch({ type: 'TOGGLE_SELECTED_SEAT', payload: seat });
  };

  const handleBookSeats = ():void => {
    alert(`Booked seats: ${selectedSeats.join(', ')} for ${selectedSession}`);
    setIsAlertActive(true);
  };

  const areSeatsSelected:boolean = selectedSeats?.length > 0;

  const handleGoMainPage = (): void => {
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