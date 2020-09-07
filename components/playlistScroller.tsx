import Link from 'next/link'

import css from './playlistScroller.module.scss'

export interface PlaylistScrollerProps {
  playlist: YouTube.Playlist
  items: YouTube.PlaylistItem[]
}

const PlaylistScroller = ({ playlist, items }: PlaylistScrollerProps) => (
  <div className={css.wrapper}>
    <h2 className={css.header}>{playlist.snippet.title}</h2>
    <ul className={css.list}>
      {items.map((item) => (
        <Link
          key={item.id}
          href={{
            pathname: '/player',
            query: {
              id: item.snippet.resourceId.videoId,
            },
          }}
        >
          <a>
            <li
              className={css.item}
              style={{
                backgroundImage: `url(${item.snippet.thumbnails.medium.url})`,
              }}
            ></li>
          </a>
        </Link>
      ))}
    </ul>
  </div>
)

export default PlaylistScroller
