import axios from 'axios';

export const FETCH_PODCAST = 'fetch_podcast';
export const FETCH_ALL_PODCASTS = 'fetch_all_podcasts';
export const FETCH_RECENT_ALL_PODCASTS = 'fetch_recent_all_podcasts';
export const FETCH_EPISODES = 'fetch_episodes';
export const PLAY_EPISODE = 'play_episode';

// const ROOT = uri.rootUri;
const ROOT = 'http://devpodcasts-dev.us-west-2.elasticbeanstalk.com';

// Fetches 15 most recent episodes (of all shows)
export function fetchRecentAllPodcasts() {
  return function(dispatch) {
    axios.get(`${ROOT}/api/podcast/recent`)
      .then(response => {
        dispatch({ type: FETCH_RECENT_ALL_PODCASTS, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function fetchAllPodcasts() {
  return function(dispatch) {
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
export function fetchEpisodes(showId) {
  return function(dispatch) {
    axios.get(`${ROOT}/api/episode/recent/${showId}/30`)
      .then(response => {
        dispatch({ type: FETCH_EPISODES, payload: response.data });
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
