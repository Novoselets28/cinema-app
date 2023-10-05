import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './store';

describe('Redux Store Configuration', () => {
  it('should create the Redux store with reducers and sagas', () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      rootReducer,
      applyMiddleware(sagaMiddleware)
    );

    expect(store).toBeDefined();
  });
});