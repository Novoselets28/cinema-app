import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';

import { API_URL_SESSION_DETAILS } from '../../../api';
import filmDescriptionReducer, { fetchFilmData, fetchFilmDataSaga, setFilmData } from '../../../redux/ducks/filmDescription';

const filmTitle = 'Film 1';
const video = 'film1.mp4';
const description = 'Description of Film 1';
const responseData = {
      films: [{ title: filmTitle, video, descr: description }],
    };

describe('filmDescription actions', () => {
  it('should create an action to fetch film data', () => {
    const expectedAction = {
      type: 'FETCH_FILM_DATA',
      payload: filmTitle,
    };

    expect(fetchFilmData(filmTitle)).toEqual(expectedAction);
  });

  it('should create an action to set film data', () => {
    
    const expectedAction = {
      type: 'SET_FILM_DATA',
      payload: { video, description },
    };

    expect(setFilmData(video, description)).toEqual(expectedAction);
  });

  it('should handle SET_FILM_DATA', () => {
    const initialState = {
      video: '',
      description: '',
    };
    const action = setFilmData(video, description);
    const expectedState = {
      video: 'film1.mp4',
      description: 'Description of Film 1',
    };

    expect(filmDescriptionReducer(initialState, action)).toEqual(expectedState);
  });
  
  it('should fetch film data and dispatch setFilmData action', () => {

    return expectSaga(fetchFilmDataSaga, fetchFilmData(filmTitle))
      .provide([[call(fetch, API_URL_SESSION_DETAILS), { ok: true, json: () => responseData }]])
      .put(setFilmData(video, description))
      .run();
  });
});