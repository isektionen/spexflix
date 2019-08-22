import axios from 'axios';

import {
  playlistsReducer,
  playlistItemsReducer,
  itemsReducer,
} from './reducers';

let numApiCall = 0;
const api = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  timeout: 1000,
});

const callApi = async ({ endpoint, params }) => {
  numApiCall++;
  console.log('Api call #' + numApiCall);

  try {
    const response = await api.get(endpoint, {
      params: {
        ...params,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response);
    }
  } catch (error) {
    console.log('Found an error');
    console.log(error);
    return [];
  }
};

const getPublicPlaylists = async channelId => {
  const request = {
    endpoint: 'playlists',
    params: {
      part: 'snippet',
      channelId: channelId,
    },
  };

  const response = await callApi(request);

  if (response) {
    return playlistsReducer(response);
  } else {
    return [];
  }
};

const getUnlistedPlaylists = async unlistedPlaylistsIds => {
  const request = {
    endpoint: 'playlists',
    params: {
      part: 'snippet',
      id: unlistedPlaylistsIds,
    },
  };

  const response = await callApi(request);

  if (response) {
    return playlistsReducer(response);
  } else {
    return [];
  }
};

const getPlaylists = async () => {
  return [
    ...(await getPublicPlaylists(process.env.REACT_APP_YOUTUBE_CHANNEL_ID)),
    ...(await getUnlistedPlaylists(
      process.env.REACT_APP_YOUTUBE_UNLISTED_PLAYLISTS_IDS,
    )),
  ];
};

const getPlaylistItems = async playlistId => {
  const request = {
    endpoint: 'playlistItems',
    params: {
      part: 'snippet',
      playlistId: playlistId,
    },
  };

  const response = await callApi(request);

  if (response) {
    return playlistItemsReducer(response);
  } else {
    return [];
  }
};

const getItems = async ids => {
  const request = {
    endpoint: 'videos',
    params: {
      part: 'snippet',
      id: ids,
    },
  };

  const response = await callApi(request);
  console.log(response);

  if (response) {
    return itemsReducer(response);
  } else {
    return [];
  }
};

export { getPlaylists, getPlaylistItems, getItems };
