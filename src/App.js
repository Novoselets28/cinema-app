import React from 'react';
import './App.css';
import MovieSessions from './components/MovieSessions';
import { Route, Routes } from "react-router-dom";
import Cinema from './components/Cinema';

function App() {
  return (
    
      <div className="App">
        <h1>Movie Ticket Booking</h1>
        <Routes>
            <Route exact path="/" element={<MovieSessions/>} />
            <Route path="/booking/:date" element={<Cinema/>} />
        </Routes>
      </div>
    
  );
}

export default App;
