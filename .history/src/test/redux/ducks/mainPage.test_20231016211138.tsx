import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import mainPageReducer, { fetchPosters, mainPageSaga, setPosters } from '../../../redux/ducks/mainPage';
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
});