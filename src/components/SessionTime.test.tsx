import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';

import SessionTime from './SessionTime';

test('renders loading message when sessions are empty', () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <SessionTime date={''} />
      </MemoryRouter>
    </Provider>
  );
  expect(container).toMatchSnapshot();
});

test('renders session buttons when sessions are available', () => {
  const sessions = ['Session 1', 'Session 2', 'Session 3'];

  store.dispatch({ type: 'SET_SESSIONS', payload: sessions });

  const { container } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <SessionTime date={''} />
      </MemoryRouter>
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
