import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

jest.mock('./components/MainPage', () => () => <div>MainPage</div>);
jest.mock('./components/SessionList', () => () => <div>SessionList</div>);
jest.mock('./components/Cinema', () => () => <div>Cinema</div>);
jest.mock('./components/FilmDescription', () => () => <div>FilmDescription</div>);

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