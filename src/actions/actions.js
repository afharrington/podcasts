import axios from 'axios';
import { podcasts } from '../data/podcasts.js';
import { recent } from '../data/recent.js';

export const FETCH_PODCAST = 'fetch_podcast';
export const FETCH_ALL_PODCASTS = 'fetch_all_podcasts';
export const FETCH_RECENT_PODCASTS = 'fetch_recent_podcasts';
export const FETCH_RECENT_N_PODCASTS = 'fetch_recent_n_podcasts';
export const FETCH_PODCAST_EPISODES = 'fetch_podcast_episodes';
export const FETCH_CATEGORY = 'fetch_category';
export const PLAY_EPISODE = 'play_episode';


// const ROOT = uri.rootUri;
// const ROOT = '//devpodcasts-dev.us-west-2.elasticbeanstalk.com';
const ROOT = 'https://www.devpodcast-api.com';

// Fetches 50 most recent podcasts with 1 episode
export function fetchRecentPodcasts() {
  return function(dispatch) {

    // Using test data
    // dispatch({ type: FETCH_RECENT_PODCASTS, payload: recent });

    axios.get(`${ROOT}/api/podcast/recent/30/1`)
      .then(response => {
        dispatch({ type: FETCH_RECENT_PODCASTS, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// Fetches N podcasts with the most recent episodes
export function fetchRecentNPodcasts(n) {
  return function(dispatch) {
    axios.get(`${ROOT}/api/podcast/recent/${n}`)
      .then(response => {
        dispatch({ type: FETCH_RECENT_N_PODCASTS, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}


// Fetches all podcasts
export function fetchAllPodcasts() {
  return function(dispatch) {

    // Using test data
    // dispatch({ type: FETCH_ALL_PODCASTS, payload: podcasts });

    axios.get(`${ROOT}/api/podcast`)
      .then(response => {
        dispatch({ type: FETCH_ALL_PODCASTS, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}


// Fetches podcast info
export function fetchPodcast(showId) {
  return function(dispatch) {
    axios.get(`${ROOT}/api/podcast/${showId}`)
      .then(response => {
        dispatch({ type: FETCH_PODCAST, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}


// Fetches episodes from specified show
export function fetchPodcastEpisodes(showId) {
  return function(dispatch) {
    axios.get(`${ROOT}/api/episode/${showId}`)
      .then(response => {
        dispatch({ type: FETCH_PODCAST_EPISODES, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// Fetches all podcasts for a specific category
export function fetchCategory(categoryId) {
  return function(dispatch) {
    axios.get(`${ROOT}/api/category/id/search/${categoryId}/2`)
      .then(response => {
        dispatch({ type: FETCH_CATEGORY, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// Sets the current episode in the built-in player
export function playEpisode(episode) {
  return {
    type: PLAY_EPISODE,
    payload: episode
  }
}
