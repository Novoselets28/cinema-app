import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Cinema from '../../components/Cinema';

import store from '../../redux/store';

const routeParams = {
    date: '2023-09-29',
    selectedSession: 'Morning'
  };

test('should renders Cinema component correctly', () => {
  
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