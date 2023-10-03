import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import { StyledButton, StyledContainer } from '../styled/MovieSessions.jsx';

import '../styled/MovieSessions.jsx'
import { API_URL_SESSIONS } from "../api";

const MovieSessions = () => {
  const navigate = useNavigate();

  const [availableDates, setAvailableDates] = useState([]);
  useEffect(() => {
    fetch(API_URL_SESSIONS)
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
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const dayOfMonth = date.getDate();

    return `${dayOfWeek} ${dayOfMonth}`;
  };

  const handleDateSelect = (date) => {
    navigate(`/session-list/${date}`);
  };

  return (
    <StyledContainer className="movie-sessions-page">
      <Card.Header>Available dates for booking tickets</Card.Header>
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
    </StyledContainer>
  );
};

export default MovieSessions;
