import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import sessionListReducer, {
  FETCH_FILMS_LIST,
  SET_FILMS_LIST,
  fetchFilmsList,
  sessionListSaga,
  setFilmsList,
  Film // Import the Film type from your code
} from '../../../redux/ducks/sessionList';
import { API_URL_LIST_OF_FILM } from '../../../api';

const films: Film[] = [ // Use the Film type
  { id: 1, Title: 'Film 1', Poster: 'poster1.jpg' },
  { id: 2, Title: 'Film 2', Poster: 'poster2.jpg' }
];

describe('sessionList actions', () => {
  it('should create an action to fetch films list', () => {
    const expectedAction = {
      type: FETCH_FILMS_LIST
    };

    expect(fetchFilmsList()).toEqual(expectedAction);
  });

  it('should create an action to set films list', () => {
    const expectedAction = {
      type: SET_FILMS_LIST,
      payload: films // Use the Film[] type
    };

    expect(setFilmsList(films)).toEqual(expectedAction);
  });

  it('should handle SET_FILMS_LIST', () => {
    const initialState = {
      films: []
    };
    const action = setFilmsList(films);
    const expectedState = {
      films
    };

    expect(sessionListReducer(initialState, action)).toEqual(expectedState);
  });

  it('should fetch films list data and dispatch setFilmsList action', () => {
    const responseData = {
      list: films
    };

    return expectSaga(sessionListSaga)
      .provide([
        [call(fetch as any, API_URL_LIST_OF_FILM), { ok: true, json: () => responseData }]
      ])
      .put(setFilmsList(responseData.list))
      .run();
  });
});
