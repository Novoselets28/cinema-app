import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import SessionList from './SessionList';

const MovieSessions = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  



  const [availableDates, setAvailableDates] = useState([]);
  useEffect(() => {
    fetch('https://demo7324815.mockable.io/api/sessions')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.dates) {
          setAvailableDates(data.dates);
        }
      })
      .catch((error) => {
        console.error('Error fetching available dates:', error);
      });
  }, []); 


  const handleDateSelect = (date) => {
    setSelectedDate(date);

  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Available dates for booking tickets
      </Typography>
      <List>
        {availableDates.map((date, index) => (
          <ListItem key={index} button onClick={() => handleDateSelect(date)}>
            <Link href="#" underline="none">
              <ListItemText primary={date} />
            </Link>
          </ListItem>
        ))}
      </List>
      {selectedDate && <SessionList selectedDate={selectedDate} />}
    </Container>
  );
};

export default MovieSessions;

// import React, { useState, useEffect } from 'react';
// import { Container, Typography, List, ListItem, ListItemText, Link } from '@mui/material';

// const MovieSessions = () => {
//   const [availableDates, setAvailableDates] = useState([]);
  
//   useEffect(() => {
//     // Fetch available dates from the provided URL
//     fetch('https://demo7324815.mockable.io/api/sessions')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data && data.dates) {
//           setAvailableDates(data.dates);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching available dates:', error);
//       });
//   }, []); // The empty dependency array ensures the effect runs only once

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Available Dates for Booking
//       </Typography>
//       <List>
//         {availableDates.map((date, index) => (
//           <ListItem key={index} button>
//             <Link href={`/booking/${date}`} underline="none">
//               <ListItemText primary={date} />
//             </Link>
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default MovieSessions;

