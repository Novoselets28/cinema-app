import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { StyledButton, StyledContainer } from '../../styled/MovieSessions';

describe('Styled Components', () => {
  it('should check if StyledButton has expected styles', () => {
    render(<StyledButton data-testid="styled-button" />);
    const styledButton = screen.getByTestId('styled-button');

    expect(styledButton).toHaveStyle(`
      width: 10rem;
      margin: 1rem;
    `);
    expect(styledButton).toMatchSnapshot();
  });

  it('should check if StyledContainer has expected styles', () => {
    render(<StyledContainer data-testid="styled-container" />);
    const styledContainer = screen.getByTestId('styled-container');

    expect(styledContainer).toHaveStyle(`
      padding-top: 2rem;
      padding-bottom: 2rem;
      text-align: center;
    `);
    expect(styledContainer).toMatchSnapshot();
  });
});