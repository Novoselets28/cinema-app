import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { StyledCol, StyledContainer, StyledRow } from '../../styled/SessionList';

describe('Styled Components', () => {
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

  it('should check if StyledRow has expected styles', () => {
    render(<StyledRow data-testid="styled-row" />);
    const styledRow = screen.getByTestId('styled-row');

    expect(styledRow).toHaveStyle(`
      row-gap: 2rem;
    `);

    expect(styledRow).toMatchSnapshot();
  });

  it('should check if StyledCol has expected styles', () => {
    render(<StyledCol data-testid="styled-col" />);
    const styledCol = screen.getByTestId('styled-col');

    expect(styledCol).toHaveStyle(`
      display: flex;
      justify-content: center;
    `);
    
    expect(styledCol).toMatchSnapshot();
  });
});