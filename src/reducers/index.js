import { combineReducers } from 'redux';
import featuredReducer from './featuredReducer';
import podcastsReducer from './podcastsReducer';
import playerReducer from './playerReducer';
import episodesReducer from './episodesReducer';
import categoriesReducer from './categoriesReducer';
import currentCategoryReducer from './currentCategoryReducer';

const rootReducer = combineReducers({
  featured: featuredReducer,
  podcasts: podcastsReducer,
  player: playerReducer,
  episodes: episodesReducer,
  categories: categoriesReducer,
  currentCategory: currentCategoryReducer
});

export default rootReducer;
