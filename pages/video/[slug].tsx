import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import graphcms, { gql } from '../../lib/graphcms'
import Icon from '../../components/icon'

import css from './player.module.scss'

const VideoPage = ({ video }): JSX.Element => {
  const router = useRouter()

  const src =
    'https://www.youtube.com/embed/' +
    video.youtubeVideoID +
    '?autoplay=1&modestbranding=1&rel=0'

  return (
    <div className={css.wrapper}>
      <iframe
        width="100%"
        height="100%"
        allowFullScreen={true}
        src={src}
      ></iframe>
      <div className={css.overlay}>
        <span className={css.backArrow} onClick={() => router.back()}>
          <Icon.Arrow direction="left" fill="#fff" />
        </span>
      </div>
    </div>
  )
}
export default VideoPage

export const getStaticProps: GetStaticProps = async (context) => {
  const { video } = await graphcms.request(
    gql`
      query VideoPageQuery($slug: String!) {
        video(where: { slug: $slug }) {
          youtubeVideoID
        }
      }
    `,
    {
      slug: context.params.slug,
    }
  )

  return {
    props: {
      video,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { videos } = await graphcms.request(
    gql`
      {
        videos {
          slug
        }
      }
    `
  )

  return {
    paths: videos.map((v) => ({
      params: {
        slug: v.slug,
      },
    })),
    fallback: false,
  }
}
