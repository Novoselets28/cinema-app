import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import FilmBox from '../../components/FilmBox';

describe('FilmBox component', () => {
  it('should render without errors', () => {
    const {container} = render(
      <Router>
        <FilmBox Title="Test Movie" Poster="test.jpg" />
      </Router>
    );

    expect(screen.getByText('Test Movie')).toBeInTheDocument();

    expect(screen.getByAltText('Test Movie')).toBeInTheDocument();

    expect(screen.getByText('View More')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

});
