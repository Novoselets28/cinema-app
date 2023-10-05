import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import FilmBox from '../../components/FilmBox';

describe('FilmBox component', () => {
  it('should render the movie title', () => {
    render(
      <Router>
        <FilmBox Title="Test Movie" Poster="test.jpg" />
      </Router>
    );

    expect(screen.getByText('Test Movie')).toBeInTheDocument();
  });

  it('should render the movie poster', () => {
    render(
      <Router>
        <FilmBox Title="Test Movie" Poster="test.jpg" />
      </Router>
    );

    expect(screen.getByAltText('Test Movie')).toBeInTheDocument();
  });

  it('should render the "View More" button', () => {
    render(
      <Router>
        <FilmBox Title="Test Movie" Poster="test.jpg" />
      </Router>
    );

    expect(screen.getByText('View More')).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = render(
      <Router>
        <FilmBox Title="Test Movie" Poster="test.jpg" />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
