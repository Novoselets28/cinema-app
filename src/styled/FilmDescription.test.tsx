import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { StyledContainer } from './FilmDescription';

describe('StyledContainer', () => {
  it('should have expected styles', () => {
    render(<StyledContainer data-testid="styled-container" />);
    const styledContainer = screen.getByTestId('styled-container');

    expect(styledContainer).toHaveStyle(`
      padding-top: 2rem;
      padding-bottom: 2rem;
      text-align: start;
    `);

    expect(styledContainer).toMatchSnapshot();
  });
});