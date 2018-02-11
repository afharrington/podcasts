import _ from 'lodash';
import { FETCH_ALL_PODCASTS, FETCH_RECENT_ALL_PODCASTS } from '../actions/actions.js';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_ALL_PODCASTS:
      return { ...state, allPodcasts: action.payload  };
    case FETCH_RECENT_ALL_PODCASTS:
      return { ...state, recentEpisodes: action.payload };
    default:
      return state;
  }
}
