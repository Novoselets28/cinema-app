import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Import your Redux store
import SessionList from './SessionList';
import { BrowserRouter } from 'react-router-dom';

describe('SessionList component', () => {
    it('renders loading message when films are empty', () => {
    const {container} = render(
        <Provider store={store}>
            <BrowserRouter>
                <SessionList date={''} />
            </BrowserRouter>
        </Provider>
    );

    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
    expect(container).toMatchSnapshot()
    });

    it('renders FilmBox components when films are available', () => {
    const films = [
        { id: 1, Title: 'Film 1', Poster: 'Poster 1' },
        { id: 2, Title: 'Film 2', Poster: 'Poster 2' },
        { id: 3, Title: 'Film 3', Poster: 'Poster 3' },
    ];
    store.dispatch({ type: 'SET_FILMS_LIST', payload: films });

    const {container} = render(
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
    expect(container).toMatchSnapshot()
    });
})

