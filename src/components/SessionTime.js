import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styled/SessionList.jsx'; // Import your custom CSS if needed
import { useNavigate } from 'react-router';
import { StyledButton } from '../styled/SessionTime';


const SessionTime = () => {
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const navigate = useNavigate(); // Initialize history from React Router

  useEffect(() => {
    // Fetch data from the API
    fetch('https://demo7324815.mockable.io/available/sessions')
      .then((response) => response.json())
      .then((data) => setSessions(data.sessions))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleTimeSelect = (session) => {
    setSelectedSession(session);
  };

  const handleBookClick = () => {
    // Check if a session is selected
    if (selectedSession) {
      // Navigate to the "Cinema" component with the selected date and session time
      navigate(`/cinema?date=selectedDate&time=${selectedSession}`);
    }
  };

  return (
    <Container className="movie-sessions-page">
      <>
        {sessions.map((session, index) => (
          <StyledButton
            key={index}
            className="transparent-button"
            onClick={() => handleTimeSelect(session)}
          >
            {session}
          </StyledButton>
        ))}
      </>
      {selectedSession && (
        <Button variant="success" onClick={handleBookClick}>
            Book
        </Button>
      )}
    </Container>
  );
};

export default SessionTime;
