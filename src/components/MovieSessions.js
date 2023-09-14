import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styled/MovieSessions.jsx'
import { StyledButton, StyledContainer } from '../styled/MovieSessions.jsx';

const MovieSessions = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

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

  const formatDateToDayOfWeek = (dateString) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const dayOfMonth = date.getDate();

    return `${dayOfWeek}, ${dayOfMonth}`;
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    navigate('/sessionlist');
  };

  return (
    <StyledContainer className="movie-sessions-page">
      <h4>Available dates for booking tickets</h4>
      <>
        {availableDates.map((date, index) => (
          <StyledButton
            variant="dark"
            key={index}
            className="transparent-button"
            onClick={() => handleDateSelect(date)}
          >
            {formatDateToDayOfWeek(date)}
          </StyledButton>
        ))}
      </>
      {selectedDate}
    </StyledContainer>
  );
};

export default MovieSessions;



