import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import graphcms, { gql } from '../../lib/graphcms';
import Icon from '../../components/icon';
import { youtubeImageURL } from '../../lib/youtube';
import YouTube from 'react-youtube';

import css from './player.module.scss';
import Button from '../../components/button';

const VideoPage = ({ video }): JSX.Element => {
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
          backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.6), rgba(20, 20, 20, 0.4)), url(${youtubeImageURL(
            video.youtubeVideoID
          )})`,
        }}
        onClick={() => player !== null && player.playVideo()}
      >
        <Button type="primary" shape="round" icon={<Icon.Play />} />
      </div>
      <YouTube
        className={css.player}
        videoId={video.youtubeVideoID}
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

export const getStaticProps: GetStaticProps = async (context) => {
  // Avoid hitting hygraph's access limitations.
  // todo(vm): reduce number of API requests.
  await new Promise((r) => setTimeout(r, 1000));

  const { video }: any = await graphcms.request(
    // todo(vm): response type.
    gql`
      query VideoPageQuery($slug: String!) {
        video(where: { slug: $slug }) {
          slug
          youtubeVideoID
        }
      }
    `,
    {
      slug: context.params.slug,
    }
  );

  return {
    props: {
      video,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Avoid hitting hygraph's access limitations.
  // todo(vm): reduce number of API requests.
  await new Promise((r) => setTimeout(r, 1000));

  const { videos }: any = await graphcms.request(
    // todo(vm): response type.
    gql`
      {
        videos {
          slug
        }
      }
    `
  );

  return {
    paths: videos.map((v) => ({
      params: {
        slug: v.slug,
      },
    })),
    fallback: false,
  };
};
