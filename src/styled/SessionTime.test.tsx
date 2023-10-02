import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { StyledButton, StyledContainer } from './SessionTime';

describe('Styled Components', () => {
  it('StyledButton should have expected styles', () => {
    render(<StyledButton data-testid="styled-button" />);
    const styledButton = screen.getByTestId('styled-button');

    expect(styledButton).toHaveStyle(`
      width: 4rem;
      margin: 4px;
    `);
    expect(styledButton).toMatchSnapshot();
  });

  it('StyledContainer should have expected styles', () => {
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
