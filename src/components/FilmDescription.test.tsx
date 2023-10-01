import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import FilmDescription from './FilmDescription';

test('FilmDescription component', () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/Барби']}>
        <Routes>
          <Route path="/:filmTitle" element={<FilmDescription />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
