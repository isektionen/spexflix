import Link from 'next/link'
import Button from './button'
import Icon from './icon'

import css from './featuredVideo.module.scss'

export interface FeaturedVideoProps {
  show: any
}

const FeaturedVideo = ({ show }: FeaturedVideoProps) => (
  <section
    className={css.wrapper}
    style={
      {
        /*backgroundImage: `url(${video.url})`*/
      }
    }
  >
    <div className={css.details}>
      <h1 className={css.title}>
        {show.title}
        <br />
        <span className={css.orTitle}>eller {show.orTitle}</span>
      </h1>
      <p className={css.description}>{show.description}</p>
      <div className={css.buttons}>
        <Link href={`video/${show.videos[0].slug}`}>
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
