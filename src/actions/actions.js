import axios from 'axios';

export const FETCH_RECENT_ALL_PODCASTS = 'fetch_recent_all_podcasts';

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
