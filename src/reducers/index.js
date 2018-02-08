import { combineReducers } from 'redux';
import featuredReducer from './featuredReducer';

const rootReducer = combineReducers({
  featured: featuredReducer,
});

export default rootReducer;
