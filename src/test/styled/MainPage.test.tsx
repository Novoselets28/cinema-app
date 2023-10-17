import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { fontSize } from '../../styled/global';
import { StyledContainer, StyledRow } from '../../styled/MainPage';

describe('Styled Components', () => {
  it('should have expected styles for StyledContainer', () => {
    render(<StyledContainer data-testid="styled-container" />);
    const styledContainer = screen.getByTestId('styled-container');

    expect(styledContainer).toHaveStyle(`
      max-width: 100%;
      text-align: center;
      height: 500px;
      font-size: ${fontSize.large};
      line-height: 18px;
    `);
  });

  it('should match snapshot for StyledContainer', () => {
    render(<StyledContainer data-testid="styled-container" />);
    const styledContainer = screen.getByTestId('styled-container');

    expect(styledContainer).toMatchSnapshot();
  });

  it('should have expected styles for StyledRow', () => {
    render(<StyledRow data-testid="styled-row" />);
    const styledRow = screen.getByTestId('styled-row');

    expect(styledRow).toHaveStyle(`
      display: flex;
      justify-content: center;
    `);
  });

  it('should match snapshot for StyledRow', () => {
    render(<StyledRow data-testid="styled-row" />);
    const styledRow = screen.getByTestId('styled-row');

    expect(styledRow).toMatchSnapshot();
  });
});
