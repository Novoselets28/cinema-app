// import React, { useEffect, useState } from 'react';
// import {
//   Container,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const SessionList = ({ selectedDate }) => {
//   const [selectedSession, setSelectedSession] = useState(null);
//   const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
//   const [sessions, setSessions] = useState([]);
//   const [sessionDetails, setSessionDetails] = useState(null);
  

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch available sessions from the provided URL
//     fetch('https://demo7324815.mockable.io/available/sessions')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data && data.sessions) {
//           setSessions(data.sessions);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching available sessions:', error);
//       });
//   }, []); 

//   const fetchSessionDetails = async () => {
//     try {
//       // Fetch session details from the provided URL
//       const response = await fetch('https://demo7324815.mockable.io/session-details');
//       if (!response.ok) {
//         throw new Error('Failed to fetch session details');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching session details:', error);
//       return null;
//     }
//   };

//   const handleSessionSelect = async (session) => {
//     setSelectedSession(session);
//     const details = await fetchSessionDetails();
//     if (details) {
//       // Find the session details and film information that match the selected date and session
//       const matchingSessionDetails = details.films.find(
//         (film) => film.date === selectedDate && film.time === session
//       );

//       if (matchingSessionDetails) {
//         setSessionDetails(matchingSessionDetails);
//       } else {
//         console.error('Session details not found for selected date and session.');
//       }
//     }
//     setIsBookingDialogOpen(true);
//   };


  

//   const handleCloseBookingDialog = () => {
//     setSelectedSession(null);
//     setIsBookingDialogOpen(false);
//   };

//   const handleBookSession = () => {
//     navigate(`/booking/${selectedDate}`);
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Sessions for {selectedDate}
//       </Typography>
//       <List>
//         {sessions.map((session, index) => (
//           <ListItem key={index}>
//             <ListItemText primary={session} />
//             <Button variant="outlined" onClick={() => handleSessionSelect(session)}>
//               Chose
//             </Button>
//           </ListItem>
//         ))}
//       </List>

//       <Dialog open={isBookingDialogOpen} onClose={handleCloseBookingDialog}>
//         <DialogTitle>Session Details</DialogTitle>
//         <DialogContent>
//           {/* <Typography variant="h6">Date: {selectedDate}</Typography>
//           <Typography variant="h6">Session Time: {selectedSession}</Typography> */}
//           {sessionDetails && (
//             <div>
//               <Typography variant="h6">Film: {sessionDetails.name}</Typography>
//               <Typography variant="h6">Date: {sessionDetails.date}</Typography>
//               <Typography variant="h6">Session Time: {sessionDetails.time}</Typography>
//               {/* Display additional session details here */}
//             </div>
//           )}
//           {/* Add seat selection and booking functionality here */}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseBookingDialog} color="primary">
//             Close
//           </Button>
//           <Button onClick={handleBookSession} color="primary">
//             Book
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default SessionList;

import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import SessionPopup from './SessionPopup'; // Import the SessionPopup component
import { useNavigate } from 'react-router';

const SessionList = ({ selectedDate }) => {
  const [sessions, setSessions] = useState([]);
  const [sessionDetails, setSessionDetails] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    // Fetch available sessions from the provided URL
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
      // Fetch session details from the provided URL
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
        navigate(`/booking/${selectedDate}/${session}/popup`); 

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






