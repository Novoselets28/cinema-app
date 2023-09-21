
// import { call, put, takeEvery } from 'redux-saga/effects';
// import { setSessions } from '../actions/actionsSessionTime';
// import { API_URL_AVAILABLE_SESSION } from '../../api';

// function* fetchSessions() {
//   try {
//     const response = yield call(fetch, API_URL_AVAILABLE_SESSION);
//     if (!response.ok) {
//       throw new Error(`HTTP Error! Status: ${response.status}`);
//     }
//     const data = yield response.json();
//     yield put(setSessions(data.sessions));
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// function* sessionSaga() {
//   yield takeEvery('FETCH_SESSIONS', fetchSessions);
// }

// export default sessionSaga;

import { call, put, takeEvery } from 'redux-saga/effects';
import { setSessions } from '../actions/actionsSessionTime';
import { API_URL_AVAILABLE_SESSION } from '../../api';

function* fetchSessions() {
  try {
    const response = yield call(fetch, API_URL_AVAILABLE_SESSION);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = yield response.json();
    yield put(setSessions(data.sessions));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function* sessionTimeSaga() {
  yield takeEvery('FETCH_SESSIONS', fetchSessions);
}

export default sessionTimeSaga;