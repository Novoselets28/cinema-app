export const SET_SESSIONS = 'SET_SESSIONS';
export const SET_SELECTED_SESSION = 'SET_SELECTED_SESSION';

export const setSessions = (sessions) => ({
  type: SET_SESSIONS,
  payload: sessions,
});

export const setSelectedSession = (session) => ({
  type: SET_SELECTED_SESSION,
  payload: session,
});