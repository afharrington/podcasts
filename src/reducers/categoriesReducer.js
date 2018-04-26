import _ from 'lodash';
import { FETCH_CATEGORY } from '../actions/actions.js';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_CATEGORY:
      return { ...state, [action.payload[0].podcastCategories[0].categoryId]: action.payload }
    default:
      return state;
  }
}
