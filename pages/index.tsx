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

  const publisher = process.env.PUBLISHER
  const copyrightFromYear = process.env.COPYRIGHT_FROM_YEAR

  return {
    props: {
      shows,
      featuredShow: shows.length > 0 ? shows[0] : undefined,
      publisher,
      copyrightFromYear,
    },
  }
}

export interface HomeProps {
  shows: any[]
  featuredShow: any
  publisher: string
  copyrightFromYear: number
}
export const Home = ({
  shows,
  featuredShow,
  publisher,
  copyrightFromYear,
}: HomeProps): JSX.Element => (
  <Layout
    title="YouFlix"
    copyrightFromYear={copyrightFromYear}
    publisher={publisher}
  >
    {featuredShow && <FeaturedVideo show={featuredShow} />}
    {shows.map((s) => (
      <PlaylistScroller key={s.id} show={s} />
    ))}
  </Layout>
)

export default Home
