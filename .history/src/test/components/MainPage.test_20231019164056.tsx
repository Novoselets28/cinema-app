import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';

import MainPage from '../../components/MainPage';

import store from '../../redux/store';

test('should check if MainPage renders correctly', () => {
  
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <MainPage mainPage={''} selectedSession={''} />
      </MemoryRouter>
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
