import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CinemaScreen, HomeButton, StyledContainer } from './Cinema';
import { colors, fontSize } from './global';

describe('Styled Components', () => {
  it('CinemaScreen should have expected styles', () => {
    render(<CinemaScreen data-testid="cinema-screen" />);
    const cinemaScreen = screen.getByTestId('cinema-screen');

    // Use Testing Library's querying methods
    expect(cinemaScreen).toHaveStyle(`
      background-color: ${colors.secondary};
      text-align: center;
      font-size: ${fontSize.medium};
      padding: 10px;
      margin-bottom: 20px;
    `);

    // Add snapshot assertion
    expect(cinemaScreen).toMatchSnapshot();
  });

  it('HomeButton should have expected styles', () => {
    render(<HomeButton data-testid="home-button" />);
    const homeButton = screen.getByTestId('home-button');

    // Use Testing Library's querying methods
    expect(homeButton).toHaveStyle(`
      margin: 5px;
    `);

    // Add snapshot assertion
    expect(homeButton).toMatchSnapshot();
  });

  it('StyledContainer should have expected styles', () => {
    render(<StyledContainer data-testid="styled-container" />);
    const styledContainer = screen.getByTestId('styled-container');

    // Use Testing Library's querying methods
    expect(styledContainer).toHaveStyle(`
      margin-top: 5px;
    `);

    // Add snapshot assertion
    expect(styledContainer).toMatchSnapshot();
  });
});
