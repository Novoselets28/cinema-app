import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { fontSize } from './global';
import { StyledContainer, StyledRow } from './MainPage';

describe('Styled Components', () => {
  it('StyledContainer should have expected styles', () => {
    render(<StyledContainer data-testid="styled-container" />);
    const styledContainer = screen.getByTestId('styled-container');

    expect(styledContainer).toHaveStyle(`
      max-width: 100%;
      text-align: center;
      height: 500px;
      font-size: ${fontSize.large};
      line-height: 18px;
    `);
    expect(styledContainer).toMatchSnapshot();
  });

  it('StyledRow should have expected styles', () => {
    render(<StyledRow data-testid="styled-row" />);
    const styledRow = screen.getByTestId('styled-row');

    expect(styledRow).toHaveStyle(`
      display: flex;
      justify-content: center;
    `);
    expect(styledRow).toMatchSnapshot();
  });
});