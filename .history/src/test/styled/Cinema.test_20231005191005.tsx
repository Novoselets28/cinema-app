import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CinemaScreen, HomeButton, StyledContainer } from '../../styled/Cinema';
import { colors, fontSize } from '../../styled/global';

describe('Styled Components', () => {
  it('should have expected styles for CinemaScreen', () => {
    render(<CinemaScreen data-testid="cinema-screen" />);
    const cinemaScreen = screen.getByTestId('cinema-screen');

    expect(cinemaScreen).toHaveStyle(`
      background-color: ${colors.secondary};
      text-align: center;
      font-size: ${fontSize.medium};
      padding: 10px;
      margin-bottom: 20px;
    `);
  });

  it('should have expected styles for HomeButton', () => {
    render(<HomeButton data-testid="home-button" />);
    const homeButton = screen.getByTestId('home-button');

    expect(homeButton).toHaveStyle(`
      margin: 5px;
    `);
  });

  it('should have expected styles for StyledContainer', () => {
    render(<StyledContainer data-testid="styled-container" />);
    const styledContainer = screen.getByTestId('styled-container');

    expect(styledContainer).toHaveStyle(`
      margin-top: 5px;
    `);
  });

  expect({ CinemaScreen, HomeButton, StyledContainer }).toMatchSnapshot();
});
