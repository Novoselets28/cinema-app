import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import StyledCard from '../../styled/FilmBox';

describe('StyledCard', () => {
  it('should have default cursor style if cursor prop is not provided', () => {
    render(<StyledCard data-testid="styled-card" />);
    const styledCard = screen.getByTestId('styled-card');

    expect(styledCard).toHaveStyle('cursor: pointer');

    expect(styledCard).toMatchSnapshot();
  });

  it('should have custom cursor style if cursor prop is provided', () => {
    render(<StyledCard data-testid="styled-card" cursor="not-allowed" />);
    const styledCard = screen.getByTestId('styled-card');

    expect(styledCard).toHaveStyle('cursor: not-allowed');

    expect(styledCard).toMatchSnapshot();
  });
});