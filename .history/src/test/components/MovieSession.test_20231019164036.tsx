import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import MovieSessions from '../../components/MovieSessions';

import store from '../../redux/store';

const sampleAvailableDates = ['Wed 6', 'Thu 7', 'Fri 8'];

test('should check if dates renders correctly', async () => {

  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <MovieSessions />
      </BrowserRouter>
    </Provider>
  );
  
  await waitFor(() => {
    sampleAvailableDates.forEach((formattedDate) => {
      const dateElement = screen.getByText(formattedDate);
      
    expect(dateElement).toBeInTheDocument();
    });
  });

  expect(container).toMatchSnapshot();
});
