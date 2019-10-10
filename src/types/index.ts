interface Thumbnail {
  url: string;
  height: number;
  width: number;
}

export interface Playlist {
  channelId?: string;
  channelTitle?: string;
  description?: string;
  id: string;
  localized?: {
    description: string;
    title: string;
  };
  publishedAt?: string;
  thumbnails?: {
    default: Thumbnail;
    high: Thumbnail;
    medium: Thumbnail;
  };
  title: string;
}

export interface Movie {
  channelId?: string;
  channelTitle?: string;
  description?: string;
  duration?: number;
  id: string;
  isNew?: boolean;
  playlistId?: string;
  position?: number;
  publishedAt?: string;
  resourceId?: {
    kind: string;
    videoId: string;
  };
  tags?: string[];
  thumbnails?: {
    default: Thumbnail;
    high: Thumbnail;
    medium: Thumbnail;
  };
  title: string;
}
