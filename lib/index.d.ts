declare namespace YouTube {
  // Common
  type Thumbnails = Record<
    'default' | 'medium' | 'high' | 'standard' | 'maxres',
    {
      url: string
      width: number
      height: number
    }
  >

  // Playlists Query
  interface PlaylistsQueryResponse {
    kind: string
    etag: string
    nextPageToken?: string
    prevPageToken?: string
    pageInfo: {
      totalResults: number
      resultsPerPage: number
    }
    items: Playlist[]
  }

  interface Playlist {
    kind: string
    etag: string
    id: string
    snippet?: {
      publishedAt: string
      channelId: string
      title: string
      description: string
      thumbnails: Thumbnails
      channelTitle: string
      tags: string[]
      defaultLanguage: string
      localized: {
        title: string
        description: string
      }
    }
  }

  // PlaylistItems Query
  interface PlaylistItemsQueryResponse {
    kind: string
    etag: string
    nextPageToken?: string
    prevPageToken?: string
    pageInfo: {
      totalResults: number
      resultsPerPage: number
    }
    items: PlaylistItem[]
  }

  interface PlaylistItem {
    kind: string
    etag: string
    id: string
    snippet?: {
      publishedAt: string
      channelId: string
      title: string
      description: string
      thumbnails: Thumbnails
      channelTitle: string
      playlistId: string
      position: number
      resourceId: {
        kind: string
        videoId: string
      }
    }
    contentDetails?: {
      videoId: string
      startAt: string
      endAt: string
      note: string
      videoPublishedAt: string
    }
  }

  // Video Query
  interface VideoQueryResponse {
    kind: string
    etag: string
    nextPageToken?: string
    prevPageToken?: string
    pageInfo: {
      totalResults: number
      resultsPerPage: number
    }
    items: Video[]
  }

  interface Video {
    kind: string
    etag: string
    id: string
    snippet?: {
      publishedAt: string
      channelId: string
      title: string
      description: string
      thumbnails: Thumbnails
      channelTitle: string
      tags: string[]
      categoryId: string
      liveBroadcastContent: string
      defaultLanguage: string
      localized: {
        title: string
        description: string
      }
      defaultAudioLanguage: string
    }
    contentDetails?: {
      duration: string
      dimension: string
      definition: string
      caption: string
      licensedContent: boolean
      regionRestriction: {
        allowed: string[]
        blocked: string[]
      }
      contentRating: ContentRating
      projection: string
      hasCustomThumbnail: boolean
    }
    statistics?: {
      viewCount: number
      likeCount: number
      dislikeCount: number
      favoriteCount: number
      commentCount: number
    }
    player?: {
      embedHtml: string
      embedHeight: number
      embedWidth: number
    }
  }

  // Boring
  interface ContentRating {
    acbRating: string
    agcomRating: string
    anatelRating: string
    bbfcRating: string
    bfvcRating: string
    bmukkRating: string
    catvRating: string
    catvfrRating: string
    cbfcRating: string
    cccRating: string
    cceRating: string
    chfilmRating: string
    chvrsRating: string
    cicfRating: string
    cnaRating: string
    cncRating: string
    csaRating: string
    cscfRating: string
    czfilmRating: string
    djctqRating: string
    djctqRatingReasons: string[]
    ecbmctRating: string
    eefilmRating: string
    egfilmRating: string
    eirinRating: string
    fcbmRating: string
    fcoRating: string
    fmocRating: string
    fpbRating: string
    fpbRatingReasons: string[]
    fskRating: string
    grfilmRating: string
    icaaRating: string
    ifcoRating: string
    ilfilmRating: string
    incaaRating: string
    kfcbRating: string
    kijkwijzerRating: string
    kmrbRating: string
    lsfRating: string
    mccaaRating: string
    mccypRating: string
    mcstRating: string
    mdaRating: string
    medietilsynetRating: string
    mekuRating: string
    mibacRating: string
    mocRating: string
    moctwRating: string
    mpaaRating: string
    mpaatRating: string
    mtrcbRating: string
    nbcRating: string
    nbcplRating: string
    nfrcRating: string
    nfvcbRating: string
    nkclvRating: string
    oflcRating: string
    pefilmRating: string
    rcnofRating: string
    resorteviolenciaRating: string
    rtcRating: string
    rteRating: string
    russiaRating: string
    skfilmRating: string
    smaisRating: string
    smsaRating: string
    tvpgRating: string
    ytRating: string
  }
}
