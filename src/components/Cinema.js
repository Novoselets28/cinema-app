import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import '../index.css'

const Cinema = () => {
  const { date } = useParams();
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
    alert(`Booked seats: ${selectedSeats.join(', ')} for ${date}`);
  };
  

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {date}
      </Typography>
      <div>
        <h2>Select Seats</h2>
        <div className="seat-container">
          {availableSeats.map((seat) => (
            <Button
              key={seat}
              variant={selectedSeats.includes(seat) ? 'contained' : 'outlined'}
              onClick={() => handleSeatSelect(seat)}
            >
              {seat}
            </Button>
          ))}
        </div>
      </div>
      <div className='confirm-btn'>
        <Button variant="contained" color="primary" onClick={handleBookSeats}>
          Book Selected Seats
        </Button>
      </div>
    </Container>
  );
};

export default Cinema;



