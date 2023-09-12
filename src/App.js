import React from 'react';
import './App.css';
import MovieSessions from './components/MovieSessions';
import { Route, Routes } from "react-router-dom";
import Cinema from './components/Cinema';
import SessionList from './components/SessionList';
import SessionPopup from './components/SessionPopup';

function App() {
  return (
    
      <div className="App">
        <h1>Movie Ticket Booking</h1>
        <Routes>
            <Route exact path="/" element={<MovieSessions/>} />
            <Route path='/sessionlist' element={<SessionList/>} />
            <Route path='/popup' element={<SessionPopup/>}/>
            <Route path="/cinema" element={<Cinema/>} />
        </Routes>
      </div>
    
  );
}

export default App;
