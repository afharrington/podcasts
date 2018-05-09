import { SET_CATEGORY } from '../actions/actions.js';

export default function(state = 0, action) {
  switch(action.type) {
    case SET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
