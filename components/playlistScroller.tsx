//import css from './playlistScroller.module.scss'

export interface PlaylistScrollerProps {
  playlist: YouTube.Playlist
  items: YouTube.PlaylistItem[]
}

const PlaylistScroller = ({ playlist, items }: PlaylistScrollerProps) => (
  <>
    <h2>{playlist.snippet.title} wow</h2>
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.snippet.title}</li>
      ))}
    </ul>
  </>
)

export default PlaylistScroller
