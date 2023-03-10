import Link from 'next/link';
import { youtubeImageURL } from '../../lib/youtube';
import Button from '../button';
import Icon from '../icon';

import css from './item.module.scss';

export interface PlaylistScrollerItemProps {
  video: any;
  width: number;
}

const Item = ({ video, width }: PlaylistScrollerItemProps) => (
  <Link href={`/video/${video.slug}`}>
    <a
      onClick={() =>
        window.analytics.track('Playlist item clicked', {
          title: video.title,
          slug: video.slug,
        })
      }
    >
      <li className={css.wrapper} style={{ width }}>
        <div className={css.item} style={{ width }}>
          <div
            className={css.video}
            style={{
              backgroundImage: `url(${youtubeImageURL(video.youtubeVideoID)})`,
            }}
          />
          <div className={css.details}>
            <Button shape="round" type="primary" icon={<Icon.Play />} />
            <span className={css.title}>{video.title}</span>
            <span className={css.views}>{video.views} visningar</span>
          </div>
        </div>
      </li>
    </a>
  </Link>
);

export default Item;
