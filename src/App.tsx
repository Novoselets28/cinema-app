import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Cinema, FilmDescription, MainPage, SessionList } from './components';

import './styled/global';
import { GlobalStyle } from './styled/global';

const App = () => {
  return (
    <div>
      <h1>Movie Ticket Booking</h1>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage mainPage={''} selectedSession={''} />} />
        <Route path="/session-list/:date" element={<SessionList date={''} />} />
        <Route path="/cinema/:date/:selectedSession" element={<Cinema date={''} selectedSession={''} />} />
        <Route path="/:filmTitle" element={<FilmDescription />} />
      </Routes>
    </div>
  );
};

export default App;
