import css from './playlistScroller.module.scss'

export interface PlaylistScrollerProps {
  playlist: YouTube.Playlist
  items: YouTube.PlaylistItem[]
}

const PlaylistScroller = ({ playlist, items }: PlaylistScrollerProps) => (
  <div className={css.wrapper}>
    <h2 className={css.header}>{playlist.snippet.title} wow</h2>
    <ul className={css.list}>
      {items.map((item) => (
        <li
          key={item.id}
          className={css.item}
          style={{
            backgroundImage: `url(${item.snippet.thumbnails.medium.url})`,
          }}
        ></li>
      ))}
    </ul>
  </div>
)

export default PlaylistScroller
