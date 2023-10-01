import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { fetchSessions, setSelectedSession } from '../redux/ducks/sessionTime';
import { StyledButton, StyledContainer } from '../styled/SessionTime';

interface SessionTimeProps {
  date: string;
}

const SessionTime: React.FC<SessionTimeProps> = () => {
  const { date } = useParams<{ date: string }>();
  const sessions: string[] = useSelector((state: any) => state.sessionTime.sessions);
  const selectedSession: string[] = useSelector((state: any) => state.sessionTime.selectedSession);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSessions());
  }, [dispatch]);

  if (sessions.length === 0) {
    return <div>Loading sessions...</div>;
  }

  const handleTimeSelect = (session: string) => {
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