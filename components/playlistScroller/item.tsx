import Link from 'next/link'

import css from './item.module.scss'

export interface PlaylistScrollerItemProps {
  item: YouTube.PlaylistItem
  width: number
}

const Item = ({ item, width }: PlaylistScrollerItemProps) => (
  <li className={css.item} style={{ width: width }}>
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
        <div
          className={css.video}
          style={{
            backgroundImage: `url(${item.snippet.thumbnails.medium.url})`,
          }}
        />
        <div className={css.details} style={{ display: 'none' }}>
          <p className={css.title}>{item.snippet.title}</p>
        </div>
      </a>
    </Link>
  </li>
)

export default Item
