import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { StyledCol, StyledContainer, StyledRow } from '../../styled/SessionList';

describe('Styled Components', () => {
  it('should have expected styles for StyledContainer', () => {
    render(<StyledContainer data-testid="styled-container" />);
    const styledContainer = screen.getByTestId('styled-container');

    expect(styledContainer).toHaveStyle(`
      padding-top: 2rem;
      padding-bottom: 2rem;
      text-align: center;
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
      row-gap: 2rem;
    `);
  });

  it('should match snapshot for StyledRow', () => {
    render(<StyledRow data-testid="styled-row" />);
    const styledRow = screen.getByTestId('styled-row');

    expect(styledRow).toMatchSnapshot();
  });

  it('should have expected styles for StyledCol', () => {
    render(<StyledCol data-testid="styled-col" />);
    const styledCol = screen.getByTestId('styled-col');

    expect(styledCol).toHaveStyle(`
      display: flex;
      justify-content: center;
    `);
  });

  it('should match snapshot for StyledCol', () => {
    render(<StyledCol data-testid="styled-col" />);
    const styledCol = screen.getByTestId('styled-col');

    expect(styledCol).toMatchSnapshot();
  });
});
