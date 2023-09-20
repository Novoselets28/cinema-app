import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';
import { StyledButton, StyledContainer } from '../styled/SessionTime';
import { API_URL_AVAILABLE_SESSION } from "../api";
import '../styled/SessionList.jsx';



const SessionTime = () => {
  const {date} = useParams()
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL_AVAILABLE_SESSION)
      .then((response) => response.json())
      .then((data) => setSessions(data.sessions))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleTimeSelect = (session) => {
    setSelectedSession(session);
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
