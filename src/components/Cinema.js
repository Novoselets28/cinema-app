import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../index.css';

const Cinema = () => {
  const { date, selectedSession } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [availableSeats, setAvailableSeats] = useState([]);

  useEffect(() => {
    fetch('https://demo7324815.mockable.io/seats')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.seats) {
          setAvailableSeats(data.seats);
        }
      })
      .catch((error) => {
        console.error('Error fetching available seats:', error);
      });
  }, []);
  

  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBookSeats = () => {
    alert(`Booked seats: ${selectedSeats.join(', ')} for ${selectedSession}`);
  };

  return (
    <Container>
      <h4>{date}</h4>
      <h2>Select Seats</h2>
      <Row className="seat-container">
        {availableSeats.map((seat) => (
          <Col key={seat} xs={2}>
            <Button
              variant={selectedSeats.includes(seat) ? 'success' : 'outline-secondary'}
              onClick={() => handleSeatSelect(seat)}
              className="mb-2"
            >
              {seat}
            </Button>
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
