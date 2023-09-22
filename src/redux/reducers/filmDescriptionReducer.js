// filmDescriptionReducer.js

import { SET_FILM_DATA } from "../actions/actionsFilmDescription";

const initialState = {
  video: '',
  description: '',
};

const filmDescriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILM_DATA:
      return {
        ...state,
        video: action.payload.video,
        description: action.payload.description,
      };
    default:
      return state;
  }
};

export default filmDescriptionReducer;
