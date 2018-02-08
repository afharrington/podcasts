import { FETCH_RECENT_ALL_PODCASTS } from '../actions/actions.js';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_RECENT_ALL_PODCASTS:
      return { ...state, recentEpisodes: action.payload };
    default:
      return state;
  }
}
