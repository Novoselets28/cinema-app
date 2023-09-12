// SessionPopup.js
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SessionPopup = ({ sessionDetails, onClose, date, session }) => {
  const navigate = useNavigate();

  const handleBookSession = () => {
    onClose();
    navigate(`/booking/${date}/${session}`);
    ;
  };
  

  return (
    <Dialog open={!!sessionDetails} onClose={onClose}>
      <DialogTitle>Session Details</DialogTitle>
      <DialogContent>
        {sessionDetails && (
          <div>
            <Typography variant="h6">Film: {sessionDetails.name}</Typography>
            <Typography variant="h6">Date: {sessionDetails.date}</Typography>
            <Typography variant="h6">Session Time: {sessionDetails.time}</Typography>
            {/* Display additional session details here */}
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={handleBookSession} color="primary">
          Book
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SessionPopup;
