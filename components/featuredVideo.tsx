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
    </div>
  </section>
)

export default FeaturedVideo
