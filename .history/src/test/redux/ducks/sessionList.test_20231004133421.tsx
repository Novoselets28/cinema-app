import { call } from 'redux-saga/effects';
import sessionListReducer, {
  fetchFilmsList,
  fetchFilmsListSaga,
  setFilmsList,
} from './sessionList';
import { expectSaga } from 'redux-saga-test-plan';
import { API_URL_LIST_OF_FILM } from '../../api';

describe('sessionList actions', () => {
  it('should create an action to fetch films list', () => {
    const expectedAction = {
      type: 'FETCH_FILMS_LIST',
    };
    expect(fetchFilmsList()).toEqual(expectedAction);
  });

  it('should create an action to set films list', () => {
    const films = ['Film 1', 'Film 2'];
    const expectedAction = {
      type: 'SET_FILMS_LIST',
      payload: films,
    };
    expect(setFilmsList(films)).toEqual(expectedAction);
  });

  it('should handle SET_FILMS_LIST', () => {
    const initialState = {
      films: [],
    };
    const films = ['Film 1', 'Film 2'];
    const action = setFilmsList(films);
    const expectedState = {
      films: ['Film 1', 'Film 2'],
    };
    expect(sessionListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should fetch films list data and dispatch setFilmsList action', () => {
    const responseData = {
      list: ['Film 1', 'Film 2'],
    };

    return expectSaga(fetchFilmsListSaga)
      .provide([[call(fetch as any, API_URL_LIST_OF_FILM), { ok: true, json: () => responseData }]])
      .put(setFilmsList(responseData.list))
      .run();
  });
});