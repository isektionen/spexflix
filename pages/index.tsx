import { GetStaticProps } from 'next'
import graphcms, { gql } from '../lib/graphcms'

import Layout from '../components/layout'
import PlaylistScroller from '../components/playlistScroller'
import FeaturedVideo from '../components/featuredVideo'

export const getStaticProps: GetStaticProps = async () => {
  const { shows, featured } = await graphcms.request(
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
        featured: shows(
          where: { featured: true }
          orderBy: date_DESC
          first: 1
        ) {
          title
          orTitle
          description
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
      featured: featured.length == 1 ? featured[0] : undefined,
    },
  }
}

export interface HomeProps {
  shows: any[]
  featured: any
}
export const Home = ({ shows, featured }: HomeProps): JSX.Element => (
  <Layout
    title={process.env.NEXT_PUBLIC_SITE_TITLE}
    copyrightFromYear={process.env.NEXT_PUBLIC_COPYRIGHT_FROM_YEAR}
    publisher={process.env.NEXT_PUBLIC_PUBLISHER}
  >
    {featured && <FeaturedVideo show={featured} />}
    {shows.map((s) => (
      <PlaylistScroller key={s.id} show={s} />
    ))}
  </Layout>
)

export default Home
