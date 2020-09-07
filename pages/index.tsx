import { GetStaticProps } from 'next'

import Layout from '../components/layout'
import PlaylistScroller from '../components/playlistScroller'
import FeaturedVideo from '../components/featuredVideo'

import {
  getChannelPlaylists,
  getUnlistedPlaylists,
  getPlaylistItems,
} from '../lib/youtube'

export const getStaticProps: GetStaticProps = async () => {
  const [channel, unlisted] = await Promise.all([
    await getChannelPlaylists({
      channelId: process.env.CHANNEL_ID,
      parts: ['snippet'],
    }),
    await getUnlistedPlaylists({
      ids: [process.env.UNLISTED_PLAYLISTS_IDS],
      parts: ['snippet'],
    }),
  ])
  const playlists = [...channel.items, ...unlisted.items]

  const playlistItemsResponse = await Promise.all(
    playlists.map(async (playlist) => {
      const response = await getPlaylistItems({
        playlistId: playlist.id,
        parts: ['snippet'],
      })
      return response
    })
  )
  const playlistItems = {}
  playlistItemsResponse.forEach((res) => {
    playlistItems[res.items[0].snippet.playlistId] = res.items
  })

  let featuredItem
  playlistItemsResponse.some((list) => {
    const res = list.items.find(
      (item) =>
        item.snippet.resourceId.videoId === process.env.FEATURED_VIDEO_ID
    )
    if (res) {
      featuredItem = res
    }
    return
  })

  return {
    props: {
      playlists,
      playlistItems,
      featuredItem,
    },
  }
}

export interface HomeProps {
  playlists: YouTube.Playlist[]
  playlistItems: {
    [id: string]: YouTube.PlaylistItem[]
  }
  featuredItem?: YouTube.PlaylistItem
}

export const Home = ({
  playlists,
  playlistItems,
  featuredItem,
}: HomeProps): JSX.Element => (
  <Layout title="YouFlix" copyrightFromYear={2019} publisher="YouFlix">
    {featuredItem && <FeaturedVideo item={featuredItem} />}
    {playlists.map((playlist) => (
      <PlaylistScroller
        key={playlist.id}
        playlist={playlist}
        items={playlistItems[playlist.id]}
      />
    ))}
  </Layout>
)

export default Home
