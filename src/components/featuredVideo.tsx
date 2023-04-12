import Link from 'next/link';
import Button from './button';
import Icon from './icon';
import type { Production } from '../../schema/production';

import css from './featuredVideo.module.scss';

export interface FeaturedVideoProps {
  production: Pick<
    Production,
    'title' | 'orTitle' | 'slug' | 'description' | 'coverImage' | 'videos'
  >;
}

const FeaturedVideo = ({ production }: FeaturedVideoProps) => (
  <section
    className={css.wrapper}
    style={{
      backgroundImage: `url(${production.coverImage.url})`,
    }}
  >
    <div className={css.details}>
      <h1 className={css.title}>
        {production.title}
        <br />
        <span className={css.orTitle}>eller {production.orTitle}</span>
      </h1>
      <p className={css.description}>{production.description}</p>
      <div className={css.buttons}>
        {production.videos.length > 0 && (
          <Link
            href={`/video/${production.slug.current}/${production.videos[0].slug.current}`}
            onClick={() =>
              window.analytics.track('Featured video play button clicked', {
                title: production.title,
                slug: production.slug,
              })
            }
          >
            <Button type="primary" icon={<Icon.Play />} text="Spela upp" />
          </Link>
        )}
        {/*
        * todo: implement details page for shows
        * https://github.com/isektionen/spexflix/issues/8
        * 
        <Button
          type="secondary"
          icon={<Icon.InformationOutline fill="#fff" />}
          text="Mer info"
        />
        */}
      </div>
    </div>
  </section>
);

export default FeaturedVideo;
