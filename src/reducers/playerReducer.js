import { PLAY_EPISODE } from '../actions/actions.js';

export default function(state = {}, action) {
  switch(action.type) {
    case PLAY_EPISODE:
      return { ...state, currentEpisode: action.payload };
    default:
      return state;
  }
}
