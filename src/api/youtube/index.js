import axios from 'axios';

import { playlistsReducer, playlistItemsReducer } from './reducers';

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

export { getPlaylists, getPlaylistItems };
/*class Foo {
  async __fetchItemsInPlaylist(playlistId) {
    const url =
      'playlistItems?part=snippet&fields=items(snippet(description%2Cposition%2CpublishedAt%2CresourceId%2FvideoId%2Cthumbnails%2Ctitle))' +
      '&playlistId=' +
      playlistId;

    const response = await this.__callApi(url);

    const items = response.items.map(item => {
      return { id: item.snippet.resourceId.id, ...item.snippet };
    });

    return items;
  }

  async __fetchPublicPlaylists() {
    const url =
      'playlists?part=snippet&fields=items(id%2Csnippet(description%2Ctags%2Ctitle))' +
      '&channelId=' +
      this.channelId;

    const response = await this.__callApi(url);

    const playlists = await Promise.all(
      response.items.map(async playlist => {
        const items = await this.__fetchItemsInPlaylist(playlist.id);
        return { items, ...playlist.snippet, id: playlist.id };
      }),
    );

    return playlists;
  }

  async __fetchUnlistedPlaylists() {
    const url =
      'playlists?part=snippet&fields=items(id%2Csnippet(description%2Ctags%2Ctitle))' +
      '&id=' +
      this.unlistedPlaylistsIds;

    const response = await this.__callApi(url);

    const playlists = await Promise.all(
      response.items.map(async playlist => {
        const items = await this.__fetchItemsInPlaylist(playlist.id);
        return { items, ...playlist.snippet, id: playlist.id };
      }),
    );

    return playlists;
  }

  async __callApi(url) {
    const keyParameter = '&key=' + this.apiKey;

    const response = await fetch(this.apiUrl + url + keyParameter);
    const json = response.json();

    return json;
  }
}
*/
