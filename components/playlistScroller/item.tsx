import Link from 'next/link'
import { youtubeImageURL } from '../../lib/youtube'

import css from './item.module.scss'

export interface PlaylistScrollerItemProps {
  video: any
  width: number
}

const Item = ({ video, width }: PlaylistScrollerItemProps) => (
  <li className={css.item} style={{ width: width }}>
    <Link href={`/video/${video.slug}`}>
      <a>
        <div
          className={css.video}
          style={{
            backgroundImage: `url(${youtubeImageURL(video.youtubeVideoID)})`,
          }}
        />
        <div className={css.details} style={{ display: 'none' }}>
          <p className={css.title}>{video.title}</p>
        </div>
      </a>
    </Link>
  </li>
)

export default Item
