import { GetStaticProps } from 'next'

import Layout from '../components/layout'
import PlaylistScroller from '../components/playlistScroller'

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

  return {
    props: {
      playlists,
      playlistItems,
    },
  }
}

export interface HomeProps {
  playlists: YouTube.Playlist[]
  playlistItems: {
    [id: string]: YouTube.PlaylistItem[]
  }
}

export const Home = ({ playlists, playlistItems }: HomeProps): JSX.Element => (
  <Layout title="YouFlix" copyrightFromYear={2019} publisher="YouFlix">
    <p>Items start</p>
    <ul>
      {playlists.map((playlist) => (
        <PlaylistScroller
          key={playlist.id}
          playlist={playlist}
          items={playlistItems[playlist.id]}
        />
      ))}
    </ul>
    <p>Items end</p>
  </Layout>
)

export default Home
