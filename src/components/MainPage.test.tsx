import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MainPage from './MainPage';
import store from '../redux/store';
import { MemoryRouter } from 'react-router';

test('MainPage renders correctly', () => {
  const { container } = render(
    <Provider store={store}>
        <MemoryRouter>
            <MainPage mainPage={''} selectedSession={''} />
        </MemoryRouter>
    </Provider>
  );
  expect(container).toMatchSnapshot();
});
