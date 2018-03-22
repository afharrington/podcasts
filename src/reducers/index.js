import { combineReducers } from 'redux';
import featuredReducer from './featuredReducer';
import podcastsReducer from './podcastsReducer';
import playerReducer from './playerReducer';
import episodesReducer from './episodesReducer';

const rootReducer = combineReducers({
  featured: featuredReducer,
  podcasts: podcastsReducer,
  player: playerReducer,
  episodes: episodesReducer
});

export default rootReducer;
