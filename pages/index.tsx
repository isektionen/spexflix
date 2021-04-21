import { GetStaticProps } from 'next'
import graphcms, { gql } from '../lib/graphcms'

import Layout from '../components/layout'
import PlaylistScroller from '../components/playlistScroller'
import FeaturedVideo from '../components/featuredVideo'

export const getStaticProps: GetStaticProps = async () => {
  const { shows } = await graphcms.request(
    gql`
      {
        shows {
          title
          orTitle
          videos {
            slug
            title
          }
        }
      }
    `
  )

  return {
    props: {
      shows,
      featuredShow: shows.length > 0 ? shows[0] : undefined,
    },
  }
}

export interface HomeProps {
  shows: any[]
  featuredShow: any
}
export const Home = ({ shows, featuredShow }: HomeProps): JSX.Element => (
  <Layout
    title={process.env.NEXT_PUBLIC_SITE_TITLE}
    copyrightFromYear={process.env.NEXT_PUBLIC_COPYRIGHT_FROM_YEAR}
    publisher={process.env.NEXT_PUBLIC_PUBLISHER}
  >
    {featuredShow && <FeaturedVideo show={featuredShow} />}
    {shows.map((s) => (
      <PlaylistScroller key={s.id} show={s} />
    ))}
  </Layout>
)

export default Home
