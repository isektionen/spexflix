import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity/client';
import Icon from '../../../components/icon';
import {
  youtubeVideoIDFromURL,
  youtubeImageURLFromVideoURL,
} from '../../../lib/youtube';
import YouTube from 'react-youtube';
import type { Production } from '../../../../schema/production';
import type { Video } from '../../../../schema/video';

import css from './player.module.scss';
import Button from '../../../components/button';

interface QueryResult {
  productions: Pick<Production, 'videos'>;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const query = groq`
    {
      "productions": *[_type == "production" && slug.current == $productionSlug]{
        videos[slug.current match $videoSlug]{
          slug,
          youtubeUrl,
          "coverImage": coverImage.asset->
        }
      }
    }
  `;

  const { productions }: QueryResult = await client.fetch(query, {
    productionSlug: context.params.productionSlug,
    videoSlug: context.params.videoSlug,
  });

  return {
    props: {
      video: productions[0].videos[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = groq`
    {
      "productions": *[_type == "production"]{
        slug,
        videos[]{
          slug
        }
      }
    }
  `;

  const {
    productions,
  }: { productions: Pick<Production, 'slug' | 'videos'>[] } =
    await client.fetch(query);

  interface CompositeSlug {
    productionSlug: string;
    videoSlug: string;
  }

  const slugs: CompositeSlug[] = [];
  productions.forEach((p) => {
    p.videos.forEach((v) => {
      slugs.push({
        productionSlug: p.slug.current,
        videoSlug: v.slug.current,
      });
    });
  });

  return {
    paths: slugs.map((s) => ({
      params: {
        productionSlug: s.productionSlug,
        videoSlug: s.videoSlug,
      },
    })),
    fallback: false,
  };
};

const VideoPage = ({
  video,
}: {
  video: Pick<Video, 'slug' | 'youtubeUrl' | 'coverImage'>;
}): JSX.Element => {
  const router = useRouter();
  const [player, setPlayer] = useState(null);
  const [showImageOverlay, setShowImageOverlay] = useState(false);

  useEffect(() => {
    window.analytics.track('Video watched', {
      slug: video.slug,
    });

    async function f() {
      const { protocol, host } = window.location;
      const res = await fetch(
        protocol + '//' + host + '/api/incrementViews?slug=' + video.slug
      );
      if (res.status !== 200) {
        const json = await res.json();
        console.error(json);
      }
    }
    f();
  }, [video]);

  return (
    <div className={css.wrapper}>
      <div
        className={`${css.imageOverlay} ${showImageOverlay && css.visible}`}
        style={{
          backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.6), rgba(20, 20, 20, 0.4)), url(${
            video.coverImage || youtubeImageURLFromVideoURL(video.youtubeUrl)
          })`,
        }}
        onClick={() => player !== null && player.playVideo()}
      >
        <Button type="primary" shape="round" icon={<Icon.Play />} />
      </div>
      <YouTube
        className={css.player}
        videoId={youtubeVideoIDFromURL(video.youtubeUrl)}
        opts={{
          playerVars: {
            modestbranding: 1,
            autoplay: 1,
            listType: 'user_uploads',
          },
        }}
        onReady={(e) => {
          setPlayer(e.target);
          e.target.playVideo();
        }}
        onPlay={() => setShowImageOverlay(false)}
        onEnd={() => setShowImageOverlay(true)}
      />
      <div className={`${css.overlay} ${showImageOverlay && css.visible}`}>
        <span
          className={css.backArrow}
          onClick={() => {
            window.analytics.track('Video player back button pressed', {
              slug: video.slug,
            });
            router.back();
          }}
        >
          <Icon.Arrow direction="left" fill="#fff" />
        </span>
      </div>
    </div>
  );
};
export default VideoPage;
