import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import { StyledButton, StyledContainer } from '../styled/MovieSessions';

import '../styled/MovieSessions';
import { fetchAvailableDates } from '../redux/ducks/movieSessions';

interface RootState {
  movieSessions: {
    availableDates: string[];
  };
}

const MovieSessions: React.FC = () => {
  const navigate = useNavigate();
  const availableDates = useSelector((state: RootState) => state.movieSessions.availableDates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAvailableDates());
  }, [dispatch]);

  const formatDateToDayOfWeek = (dateString: string): string => {
    const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date: Date = new Date(dateString);
    const dayOfWeek: string = daysOfWeek[date.getUTCDay()];
    const dayOfMonth: number = date.getDate();

    return `${dayOfWeek} ${dayOfMonth}`;
  };

  const handleDateSelect = (date: string): void => {
    navigate(`/session-list/${date}`);
  };

  return (
    <StyledContainer className="movie-sessions-page">
      <Card.Header>Available dates for booking tickets</Card.Header>
      <>
        {availableDates.map((date: string, index: number) => (
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