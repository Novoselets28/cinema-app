import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import SessionPopup from './SessionPopup';
import { useNavigate } from 'react-router';

const SessionList = ({ selectedDate }) => {
  const [sessions, setSessions] = useState([]);
  const [sessionDetails, setSessionDetails] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://demo7324815.mockable.io/available/sessions')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.sessions) {
          setSessions(data.sessions);
        }
      })
      .catch((error) => {
        console.error('Error fetching available sessions:', error);
      });
  }, []); 

  const fetchSessionDetails = async () => {
    try {
      const response = await fetch('https://demo7324815.mockable.io/session-details');
      if (!response.ok) {
        throw new Error('Failed to fetch session details');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching session details:', error);
      return null;
    }
  };

  const handleSessionSelect = async (session) => {
    const details = await fetchSessionDetails();
    if (details) {
      const matchingSessionDetails = details.films.find(
        (film) => film.date === selectedDate && film.time === session
      );

      if (matchingSessionDetails) {
        setSessionDetails(matchingSessionDetails);
        setIsPopupOpen(true);
        // navigate('/popup'); 
      } else {
        console.error('Session details not found for selected date and session.');
      }
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSessionDetails(null);
  };
  
  

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Sessions for {selectedDate}
      </Typography>
      <List>
        {sessions.map((session, index) => (
          <ListItem key={index}>
            <ListItemText primary={session} />
            <Button variant="outlined" onClick={() => handleSessionSelect(session)}>
              Choose
            </Button>
          </ListItem>
        ))}
      </List>

      <SessionPopup
        sessionDetails={sessionDetails}
        open={isPopupOpen}
        onClose={handleClosePopup}
        date={selectedDate}
      />
    </Container>
  );
};

export default SessionList;






