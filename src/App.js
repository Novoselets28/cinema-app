// App.js
import React from 'react';
import './App.css';
import MovieSessions from './components/MovieSessions';
import { Route, Routes } from 'react-router-dom';
import Cinema from './components/Cinema';
import SessionList from './components/SessionList';
import SessionPopup from './components/SessionPopup'; // Import SessionPopup

function App() {
  return (
    <div className="App">
      <h1>Movie Ticket Booking</h1>
      <Routes>
        <Route path="/" element={<MovieSessions />} />
        <Route path="/booking/:date" element={<Cinema />} />
        <Route path="/booking/:date/:session" element={<SessionList />} />
        <Route path="/booking/:date/:session/popup" element={<SessionPopup />} />
      </Routes>
    </div>
  );
}

export default App;
