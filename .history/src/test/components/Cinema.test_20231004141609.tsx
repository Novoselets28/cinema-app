import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../redux/store';
import Cinema from '../../components/Cinema';

test('renders Cinema component correctly', () => {
  const routeParams = {
    date: '2023-09-29',
    selectedSession: 'Morning',
  };

  const { asFragment } = render(
    <MemoryRouter initialEntries={[`/cinema/${routeParams.date}/${routeParams.selectedSession}`]}>
      <Provider store={store}>
        <Routes>
          <Route path="/cinema/:date/:selectedSession" element={<Cinema date={''} selectedSession={''} />} />
        </Routes>
      </Provider>
    </MemoryRouter>
  );

  expect(asFragment()).toMatchSnapshot();
});
