import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router';

const MovieSessions = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate()



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
    navigate('/sessionlist')
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Available dates for booking tickets
      </Typography>
      <List>
        {availableDates.map((date, index) => (
          <ListItem key={index} button onClick={() => handleDateSelect(date)}>
              <ListItemText primary={date} />
          </ListItem>
        ))}
      </List>
      {selectedDate}
    </Container>
  );
};

export default MovieSessions;
