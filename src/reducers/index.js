import { combineReducers } from 'redux';
import featuredReducer from './featuredReducer';
import podcastReducer from './podcastReducer';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
  featured: featuredReducer,
  podcast: podcastReducer,
  player: playerReducer
});

export default rootReducer;
