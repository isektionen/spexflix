import Link from 'next/link';
import Button from '../button';
import Icon from '../icon';
import { youtubeImageURL } from '../../lib/youtube';

import css from './item.module.scss';

export interface PlaylistScrollerItemProps {
  show: any;
  width: number;
}

const Item = ({ show, width }: PlaylistScrollerItemProps) => (
  (<Link
    href={`/show/${show.slug}`}
    onClick={() =>
      window.analytics.track('Playlist item clicked', {
        title: show.title,
        slug: show.slug,
      })
    }>

    <li className={css.wrapper} style={{ width }}>
      <div className={css.item} style={{ width }}>
        <div
          className={css.video}
          style={{
            backgroundImage: `url(${show.image?.url || youtubeImageURL(show.videos[0].youtubeVideoID)})`,
          }}
        />
        <div className={css.details}>
          <Button shape="round" type="primary" icon={<Icon.Play />} />
        </div>
      </div>
    </li>

  </Link>)
);

export default Item;
