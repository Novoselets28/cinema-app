import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styled/MovieSessions.jsx'
import { StyledButton, StyledContainer } from '../styled/MovieSessions.jsx';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAvailableDates } from '../redux/actions/actionsMovieSessions.js';

const MovieSessions = () => {
  const navigate = useNavigate();
  const availableDates = useSelector((state) => state.movieSessions.availableDates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAvailableDates());
  }, [dispatch]);

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