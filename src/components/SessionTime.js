import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import { StyledButton, StyledContainer } from '../styled/SessionTime';
import { fetchSessions, setSelectedSession } from '../redux/ducks/sessionTime';

const SessionTime = () => {
  const { date } = useParams();
  const sessions = useSelector((state) => state.sessionTime.sessions);
  const selectedSession = useSelector((state) => state.sessionTime.selectedSession);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSessions());
  }, [dispatch]);

  if (sessions.length === 0) {
    return <div>Loading sessions...</div>;
  }

  const handleTimeSelect = (session) => {
        dispatch(setSelectedSession(session));
      };
    
      const handleBookClick = () => {
        if (selectedSession) {
          navigate(`/cinema/${date}/${selectedSession}`);
        }
      };

  return (
    <StyledContainer>
      {sessions.map((session, index) => (
        <StyledButton
          key={index}
          className="transparent-button"
          onClick={() => handleTimeSelect(session)}
        >
          {session}
        </StyledButton>
      ))}
      {selectedSession && (
        <Button variant="success" onClick={handleBookClick}>
          Book
        </Button>
      )}
    </StyledContainer>
  );
};

export default SessionTime;
