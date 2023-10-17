import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import mainPageReducer, { fetchPosters, fetchPostersDataSaga, mainPageSaga, setPosters } from '../../../redux/ducks/mainPage';
import { API_URL_LIST_OF_FILM } from '../../../api';

describe('mainPage actions', () => {
  it('should create an action to fetch posters', () => {
    const expectedAction = {
      type: 'mainPage/FETCH_POSTERS'
    };

    expect(fetchPosters()).toEqual(expectedAction);
  });

  it('should create an action to set posters', () => {
    const posters = ['poster1.jpg', 'poster2.jpg'];
    const expectedAction = {
      type: 'mainPage/SET_POSTERS',
      payload: posters
    };

    expect(setPosters(posters)).toEqual(expectedAction);
  });

  it('should handle SET_POSTERS', () => {
    const initialState = {
      posters: []
    };
    const posters = ['poster1.jpg', 'poster2.jpg'];
    const action = setPosters(posters);
    const expectedState = {
      posters: ['poster1.jpg', 'poster2.jpg']
    };
    
    expect(mainPageReducer(initialState, action)).toEqual(expectedState);
  });
  
  it('should fetch posters data and dispatch setPosters action', () => {
    const responseData = {
      list: [
        { Poster: 'poster1.jpg' },
        { Poster: 'poster2.jpg' }
      ]
    };

    return expectSaga(mainPageSaga)
      .provide([[call(fetch, API_URL_LIST_OF_FILM), { ok: true, json: () => responseData }]])
      .put(setPosters(['poster1.jpg', 'poster2.jpg']))
      .run();
  });
});