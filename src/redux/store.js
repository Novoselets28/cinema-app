
// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import sessionTimeReducer from './reducers/reducersSessionTime';
// import sessionTimeSaga from './sagas/sagasSessionTime';
// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//     sessionTimeReducer,
//   applyMiddleware(sagaMiddleware)
// );

// sagaMiddleware.run(sessionTimeSaga);

// export default store;

// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import sessionTimeReducer from './reducers/reducersSessionTime';
// import sessionListReducer from './reducers/reducersSessionList';
// import sessionTimeSaga from './sagas/sagasSessionTime';
// import sessionListSaga from './sagas/sagasSessionList';
// import movieSessionsReducer from './reducers/reducersMovieSessions';
// import movieSessionsSaga from './sagas/sagasMovieSessions';
// import mainPageReducer from './reducers/reducersMainPage';
// import mainPageSaga from './sagas/sagasMainPage';
// import filmReducer from './reducers/reducerFilmDescription';
// import filmDescrSaga from './sagas/sagasFilmDescription';

// const sagaMiddleware = createSagaMiddleware();

// const rootReducer = combineReducers({
//   mainPage: mainPageReducer,
//   sessionTime: sessionTimeReducer,
//   sessionList: sessionListReducer,
//   movieSessions: movieSessionsReducer,
//   filmDescription:filmReducer,
  
// });

// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// );

// sagaMiddleware.run(mainPageSaga);
// sagaMiddleware.run(sessionTimeSaga);
// sagaMiddleware.run(sessionListSaga);
// sagaMiddleware.run(movieSessionsSaga);
// sagaMiddleware.run(filmDescrSaga);


// export default store;

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

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  mainPage: mainPageReducer,
  sessionTime: sessionTimeReducer,
  sessionList: sessionListReducer,
  movieSessions: movieSessionsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mainPageSaga);
sagaMiddleware.run(sessionTimeSaga);
sagaMiddleware.run(sessionListSaga);
sagaMiddleware.run(movieSessionsSaga);
export default store;
