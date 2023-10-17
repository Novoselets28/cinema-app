import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import StyledCard from '../../styled/FilmBox';

describe('StyledCard', () => {
  it('should have default cursor style if cursor prop is not provided', () => {
    render(<StyledCard data-testid="styled-card" />);
    const styledCard = screen.getByTestId('styled-card');

    expect(styledCard).toHaveStyle('cursor: pointer');
  });

  it('should match snapshot with default cursor style if cursor prop is not provided', () => {
    render(<StyledCard data-testid="styled-card" />);
    const styledCard = screen.getByTestId('styled-card');

    expect(styledCard).toMatchSnapshot();
  });

  it('should have custom cursor style if cursor prop is provided', () => {
    render(<StyledCard data-testid="styled-card" cursor="not-allowed" />);
    const styledCard = screen.getByTestId('styled-card');

    expect(styledCard).toHaveStyle('cursor: not-allowed');
  });

  it('should match snapshot with custom cursor style if cursor prop is provided', () => {
    render(<StyledCard data-testid="styled-card" cursor="not-allowed" />);
    const styledCard = screen.getByTestId('styled-card');

    expect(styledCard).toMatchSnapshot();
  });
});
