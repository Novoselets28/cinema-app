import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { fontSize } from '../../styled/global';
import { StyledContainer, StyledRow } from '../../styled/MainPage';

describe('Styled Components', () => {
  it('should check if StyledContainer has expected styles', () => {
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

  it('should check if StyledRow has expected styles', () => {
    render(<StyledRow data-testid="styled-row" />);
    const styledRow = screen.getByTestId('styled-row');

    expect(styledRow).toHaveStyle(`
      display: flex;
      justify-content: center;
    `);
    expect(styledRow).toMatchSnapshot();
  });
});