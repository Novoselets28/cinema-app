import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import SessionList from '../../components/SessionList';

import store from '../../redux/store';

const films = [
  { id: 1, Title: 'Film 1', Poster: 'Poster 1' },
  { id: 2, Title: 'Film 2', Poster: 'Poster 2' },
  { id: 3, Title: 'Film 3', Poster: 'Poster 3' }
];

describe('check SessionList component', () => {
  it('should check if loading message renders when films are empty', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SessionList date={''} />
        </BrowserRouter>
      </Provider>
    );

    const loadingMessage = screen.getByText('Loading...');

    expect(loadingMessage).toBeInTheDocument();
  });

  it('should match snapshot for loading state', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SessionList date={''} />
        </BrowserRouter>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should check if FilmBox components render when films are available', () => {
    store.dispatch({ type: 'SET_FILMS_LIST', payload: films });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <SessionList date={''} />
        </BrowserRouter>
      </Provider>
    );

    films.forEach((film) => {
      const filmBoxTitle = screen.getByText(film.Title);

      expect(filmBoxTitle).toBeInTheDocument();
    });
  });

  it('should match snapshot for films available state', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SessionList date={''} />
        </BrowserRouter>
      </Provider>
    );
    
    expect(container).toMatchSnapshot();
  });
});
