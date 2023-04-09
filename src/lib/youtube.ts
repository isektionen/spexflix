export const youtubeVideoIDFromURL = (url: string): string | null => {
  const re = /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]*)/;
  const id = url.match(re);
  if (id.length !== 2) {
    return null;
  }
  return id[1];
};

export const youtubeImageURLFromVideoURL = (url: string): string | null => {
  const id = youtubeVideoIDFromURL(url);
  if (!id) {
    return null;
  }
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};
