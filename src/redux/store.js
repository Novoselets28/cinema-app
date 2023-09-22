import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sessionTimeReducer from './reducers/reducersSessionTime';
import sessionListReducer from './reducers/reducersSessionList';
import sessionTimeSaga from './sagas/sagasSessionTime';
import sessionListSaga from './sagas/sagasSessionList';
import movieSessionsReducer from './reducers/reducersMovieSessions';
import movieSessionsSaga from './sagas/sagasMovieSessions';
import mainPageReducer from './reducers/reducersMainPage';
import mainPageSaga from './sagas/sagasMainPage';
import filmDescriptionReducer from './reducers/filmDescriptionReducer';
import filmDescriptionSaga from './sagas/filmDescriptionSaga';
import cinemaReducer from './reducers/reducersCinema';
import cinemaSaga from './sagas/cinemaSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  mainPage: mainPageReducer,
  sessionTime: sessionTimeReducer,
  sessionList: sessionListReducer,
  movieSessions: movieSessionsReducer,
  filmDescription: filmDescriptionReducer,
  cinema: cinemaReducer,

});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mainPageSaga);
sagaMiddleware.run(sessionTimeSaga);
sagaMiddleware.run(sessionListSaga);
sagaMiddleware.run(movieSessionsSaga);
sagaMiddleware.run(filmDescriptionSaga);
sagaMiddleware.run(cinemaSaga);

export default store;
