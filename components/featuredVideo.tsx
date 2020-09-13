import Link from 'next/link'
import Button from './button'
import Icon from './icon'

import css from './featuredVideo.module.scss'

export interface FeaturedVideoProps {
  item: YouTube.PlaylistItem
}

const FeaturedVideo = ({ item }: FeaturedVideoProps) => (
  <section
    className={css.wrapper}
    style={{ backgroundImage: `url(${item.snippet.thumbnails.high.url})` }}
  >
    <div className={css.details}>
      <p className={css.title}>{item.snippet.title}</p>
      <p className={css.description}>{item.snippet.description}</p>
      <div className={css.buttons}>
        <Link
          href={{
            pathname: '/player',
            query: {
              id: item.snippet.resourceId.videoId,
            },
          }}
        >
          <a>
            <Button type="primary" icon={<Icon.Play />} text="Spela upp" />
          </a>
        </Link>
        <Button
          type="secondary"
          icon={<Icon.InformationOutline fill="#fff" />}
          text="Mer info"
        />
      </div>
    </div>
  </section>
)

export default FeaturedVideo
