import _ from 'lodash';
import { FETCH_PODCAST_EPISODES } from '../actions/actions.js';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_PODCAST_EPISODES:
      return { ...state, [action.payload[0].podcastId]: action.payload }
    default:
      return state;
  }
}
