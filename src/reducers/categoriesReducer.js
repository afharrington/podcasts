import { FETCH_CATEGORY } from '../actions/actions.js';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_CATEGORY:
      return { ...state, [action.payload.category.id]: action.payload.podcasts }
    default:
      return state;
  }
}
