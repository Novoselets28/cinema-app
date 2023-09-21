export const setSessions = (sessions) => ({
  type: 'SET_SESSIONS',
  payload: sessions,
});

export const setSelectedSession = (session) => ({
  type: 'SET_SELECTED_SESSION',
  payload: session,
});