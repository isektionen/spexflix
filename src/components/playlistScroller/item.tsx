import Link from 'next/link';
import { youtubeImageURLFromVideoURL } from '../../lib/youtube';
import Button from '../button';
import Icon from '../icon';
import { Video } from '../../../schema/video';

import css from './item.module.scss';

export interface PlaylistScrollerItemProps {
  video: Pick<Video, 'title' | 'slug' | 'coverImage' | 'youtubeUrl'>;
  width: number;
}

const Item = ({ video, width }: PlaylistScrollerItemProps) => (
  <Link
    href={`/video/${video.slug.current}`}
    onClick={() =>
      window.analytics.track('Playlist item clicked', {
        title: video.title,
        slug: video.slug.current,
      })
    }
  >
    <li className={css.wrapper} style={{ width }}>
      <div className={css.item} style={{ width }}>
        <div
          className={css.video}
          style={{
            backgroundImage: `url(${
              video.coverImage?.url ||
              youtubeImageURLFromVideoURL(video.youtubeUrl)
            })`,
          }}
        />
        <div className={css.details}>
          <Button shape="round" type="primary" icon={<Icon.Play />} />
          <span className={css.title}>{video.title}</span>
        </div>
      </div>
    </li>
  </Link>
);

export default Item;
