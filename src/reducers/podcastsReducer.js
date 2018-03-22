import _ from 'lodash';
import { FETCH_PODCAST, FETCH_ALL_PODCASTS } from '../actions/actions.js';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_PODCAST:
      return { ...state, [action.payload.id]: action.payload }
    case FETCH_ALL_PODCASTS:
      return _.mapKeys(action.payload, 'id')
    default:
      return state;
  }
}
