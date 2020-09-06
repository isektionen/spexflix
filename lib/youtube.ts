import axios, { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  timeout: 1000,
  params: {
    key: process.env.API_KEY,
  },
}

const client = axios.create(config)

export interface GetChannelPlaylistsRequest {
  channelId: string
  parts?: PlaylistPart[]
}
type PlaylistPart = 'snippet'

export const getChannelPlaylists = async ({
  channelId,
  parts = [],
}: GetChannelPlaylistsRequest): Promise<YouTube.PlaylistsQueryResponse> => {
  const response = await client.get('playlists', {
    params: {
      channelId,
      part: parts.length > 0 ? parts.join() : undefined,
    },
  })

  if (response.status != 200) {
    throw new Error(response.statusText)
  }

  return response.data
}

export interface GetUnlistedPlaylistsRequest {
  ids: string[]
  parts?: PlaylistPart[]
}
export const getUnlistedPlaylists = async ({
  ids,
  parts = [],
}: GetUnlistedPlaylistsRequest): Promise<YouTube.PlaylistsQueryResponse> => {
  const response = await client.get('playlists', {
    params: {
      id: ids.join(),
      part: parts.length > 0 ? parts.join() : undefined,
    },
  })

  if (response.status != 200) {
    throw new Error(response.statusText)
  }

  return response.data
}

export interface GetPlaylistItemsRequest {
  playlistId: string
  parts?: PlaylistItemPart[]
}
type PlaylistItemPart = 'snippet' | 'contentDetails'

export const getPlaylistItems = async ({
  playlistId,
  parts = [],
}: GetPlaylistItemsRequest): Promise<YouTube.PlaylistItemsQueryResponse> => {
  const response = await client.get('playlistItems', {
    params: {
      playlistId,
      part: parts.length > 0 ? parts.join() : undefined,
    },
  })

  if (response.status != 200) {
    throw new Error(response.statusText)
  }

  return response.data
}

export interface GetVideoRequest {
  ids: string[]
  parts?: VideoPart[]
}
type VideoPart = 'snippet' | 'contentDetails' | 'statistics' | 'player'

export const getVideo = async ({
  ids,
  parts = [],
}: GetVideoRequest): Promise<YouTube.VideoQueryResponse> => {
  const id = ids.join() // YouTube wants a comma separated list of ids
  const response = await client.get('video', {
    params: {
      id,
      part: parts.length > 0 ? parts.join() : undefined,
    },
  })

  if (response.status != 200) {
    throw new Error(response.statusText)
  }

  return response.data
}
