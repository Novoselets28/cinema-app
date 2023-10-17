import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { StyledButton, StyledContainer } from '../../styled/SessionTime';

describe('Styled Components', () => {
  it('should have expected styles for StyledButton', () => {
    render(<StyledButton data-testid="styled-button" />);
    const styledButton = screen.getByTestId('styled-button');

    expect(styledButton).toHaveStyle(`
      width: 4rem;
      margin: 4px;
    `);
  });

  it('should match snapshot for StyledButton', () => {
    render(<StyledButton data-testid="styled-button" />);
    const styledButton = screen.getByTestId('styled-button');

    expect(styledButton).toMatchSnapshot();
  });

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
});
