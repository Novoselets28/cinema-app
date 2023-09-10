import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import '../index.css'

const Cinema = () => {
  const { date } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
    const [availableSeats, setAvailableSeats] = useState([]);



  useEffect(() => {
    // Fetch available seats from the provided URL
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




// import React, { useState, useEffect } from 'react';
// import { Container, Typography, Grid, Button } from '@mui/material';

// const Cinema = ({ match }) => {
//   const [availableSeats, setAvailableSeats] = useState([]);
//   const { date } = match.params; // Assuming you have the date as a route parameter

//   useEffect(() => {
//     // Fetch available seats from the provided URL
//     fetch('https://demo7324815.mockable.io/seats')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data && data.seats) {
//           setAvailableSeats(data.seats);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching available seats:', error);
//       });
//   }, []); // The empty dependency array ensures the effect runs only once when the component mounts

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Cinema Booking for {date}
//       </Typography>
//       <Typography variant="h5" gutterBottom>
//         Available Seats:
//       </Typography>
//       <Grid container spacing={2}>
//         {availableSeats.map((seat, index) => (
//           <Grid item key={index}>
//             <Button variant="outlined" color="primary">
//               {seat}
//             </Button>
//           </Grid>
//         ))}
//       </Grid>
//       {/* Implement seat selection and booking functionality here */}
//     </Container>
//   );
// };

// export default Cinema;

