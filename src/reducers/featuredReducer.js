import { FETCH_RECENT_PODCASTS, FETCH_RECENT_N_PODCASTS } from '../actions/actions.js';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_RECENT_PODCASTS:
      return { ...state, recentPodcasts: action.payload };
    case FETCH_RECENT_N_PODCASTS:
      return { ...state, recentPodcasts: action.payload };
    default:
      return state;
  }
}
