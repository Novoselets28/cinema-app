import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CinemaScreen, HomeButton, StyledContainer } from './Cinema';
import { colors, fontSize } from './global';

describe('Styled Components', () => {
  it('CinemaScreen should have expected styles', () => {
    render(<CinemaScreen data-testid="cinema-screen" />);
    const cinemaScreen = screen.getByTestId('cinema-screen');

    expect(cinemaScreen).toHaveStyle(`
      background-color: ${colors.secondary};
      text-align: center;
      font-size: ${fontSize.medium};
      padding: 10px;
      margin-bottom: 20px;
    `);

    expect(cinemaScreen).toMatchSnapshot();
  });

  it('HomeButton should have expected styles', () => {
    render(<HomeButton data-testid="home-button" />);
    const homeButton = screen.getByTestId('home-button');

    expect(homeButton).toHaveStyle(`
      margin: 5px;
    `);

    expect(homeButton).toMatchSnapshot();
  });

  it('StyledContainer should have expected styles', () => {
    render(<StyledContainer data-testid="styled-container" />);
    const styledContainer = screen.getByTestId('styled-container');

    expect(styledContainer).toHaveStyle(`
      margin-top: 5px;
    `);

    expect(styledContainer).toMatchSnapshot();
  });
});