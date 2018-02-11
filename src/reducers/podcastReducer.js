import { FETCH_EPISODES, FETCH_PODCAST } from '../actions/actions.js';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_PODCAST:
      return {...state, podcast: action.payload };
    case FETCH_EPISODES:
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}
