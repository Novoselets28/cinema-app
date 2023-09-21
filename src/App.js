import React from 'react';
import { Route, Routes } from "react-router-dom";

import Cinema from './components/Cinema';
import SessionList from './components/SessionList';
import MainPage from './components/MainPage';

import './App.css';
import FilmDescription from './components/FilmDescription';

const App = () => {
  return (
    <div className="App">
      <h1>Movie Ticket Booking</h1>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/session-list/:date" element={<SessionList />} />
        <Route path="/cinema/:date/:selectedSession" element={<Cinema />} />
        <Route path="/:filmTitle" element={<FilmDescription />} />
      </Routes>
    </div>
  );
}


export default App;
