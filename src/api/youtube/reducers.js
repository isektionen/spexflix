const playlistsReducer = response => {
  return response.items.map(item => {
    return {
      ...item.snippet,
      id: item.id,
    };
  });
};

const playlistItemsReducer = response => {
  return response.items.map(item => {
    return {
      ...item.snippet,
      id: item.snippet.resourceId.videoId,
    };
  });
};

const itemsReducer = response => {
  return response.items.map(item => {
    return {
      ...item.snippet,
      id: item.id,
    };
  });
};

export { playlistsReducer, playlistItemsReducer, itemsReducer };
