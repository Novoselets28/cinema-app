import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

jest.mock('./components/MainPage', () => {
  const Main = () => <div>MainPage</div>;
  Main.displayName = 'MainPage';
  return Main;
});

jest.mock('./components/SessionList', () => {
  const SessionList = () => <div>SessionList</div>;
  SessionList.displayName = 'SessionList';
  return SessionList;
});

jest.mock('./components/Cinema', () => {
  const Cinema = () => <div>Cinema</div>;
  Cinema.displayName = 'Cinema';
  return Cinema;
});

jest.mock('./components/FilmDescription', () => {
  const FilmDescription = () => <div>FilmDescription</div>;
  FilmDescription.displayName = 'FilmDescription';
  return FilmDescription;
});

test('renders MainPage when the route is /', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText('MainPage')).toBeInTheDocument();
});

test('renders SessionList when the route is /session-list/:date', () => {
  render(
    <MemoryRouter initialEntries={['/session-list/2023-10-01']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText('SessionList')).toBeInTheDocument();
});

test('renders Cinema when the route is /cinema/:date/:selectedSession', () => {
  render(
    <MemoryRouter initialEntries={['/cinema/2023-10-01/1']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText('Cinema')).toBeInTheDocument();
});

test('renders FilmDescription when the route is /:filmTitle', () => {
  render(
    <MemoryRouter initialEntries={['/avengers-endgame']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText('FilmDescription')).toBeInTheDocument();
});