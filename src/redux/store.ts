// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import mainPageReducer, { mainPageSaga } from './ducks/mainPage';
// import cinemaReducer, { cinemaSaga } from './ducks/cinema';
// import filmDescriptionReducer, { filmDescriptionSaga } from './ducks/filmDescription';
// import movieSessionsReducer, { movieSessionsSaga } from './ducks/movieSessions';
// import sessionListReducer, { sessionListSaga } from './ducks/sessionList';
// import sessionTimeReducer, { sessionTimeSaga } from './ducks/sessionTime';
// const sagaMiddleware = createSagaMiddleware();

// const rootReducer = combineReducers({
//   mainPage: mainPageReducer,
//   sessionTime: sessionTimeReducer,
//   sessionList: sessionListReducer,
//   movieSessions: movieSessionsReducer,
//   filmDescription: filmDescriptionReducer,
//   cinema: cinemaReducer,

// });

// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// );

// sagaMiddleware.run(mainPageSaga);
// sagaMiddleware.run(sessionTimeSaga);
// sagaMiddleware.run(sessionListSaga);
// sagaMiddleware.run(movieSessionsSaga);
// sagaMiddleware.run(filmDescriptionSaga);
// sagaMiddleware.run(cinemaSaga);

// export default store;


import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mainPageReducer, { mainPageSaga } from './ducks/mainPage';
import movieSessionsReducer, { movieSessionsSaga } from './ducks/movieSessions';
import sessionTimeReducer, { sessionTimeSaga } from './ducks/sessionTime';
import filmDescriptionReducer, { filmDescriptionSaga } from './ducks/filmDescription';
import cinemaReducer, { cinemaSaga } from './ducks/cinema';
import sessionListReducer, { sessionListSaga } from './ducks/sessionList';

export type RootState = ReturnType<typeof rootReducer>;


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
