import { GetStaticProps } from 'next'
import graphcms, { gql } from '../lib/graphcms'

import Layout from '../components/layout'
import PlaylistScroller from '../components/playlistScroller'
import FeaturedVideo from '../components/featuredVideo'

export const getStaticProps: GetStaticProps = async () => {
  const { shows, featured, categories } = await graphcms.request(
    gql`
      {
        shows(orderBy: date_DESC) {
          slug
          title
          orTitle
          videos {
            slug
            title
            youtubeVideoID
            views
          }
        }
        featured: shows(
          where: { description_not: "", image: { id_not: "" } }
          orderBy: date_DESC
          first: 1
        ) {
          title
          orTitle
          description
          image {
            url
          }
          videos {
            slug
            title
          }
        }
        categories: showCategories(orderBy: order_ASC) {
          name
          slug
        }
      }
    `
  )

  return {
    props: {
      shows,
      categories,
      featured: featured.length > 0 ? featured[0] : null,
    },
  }
}

export interface HomeProps {
  shows: any[]
  featured: any
  categories: string[]
}
export const Home = ({
  shows,
  featured,
  categories,
}: HomeProps): JSX.Element => (
  <Layout
    title={process.env.NEXT_PUBLIC_SITE_TITLE}
    copyrightFromYear={process.env.NEXT_PUBLIC_COPYRIGHT_FROM_YEAR}
    publisher={process.env.NEXT_PUBLIC_PUBLISHER}
    categories={categories}
  >
    {featured && <FeaturedVideo show={featured} />}
    {shows.map((s) => (
      <PlaylistScroller key={s.slug} show={s} />
    ))}
  </Layout>
)

export default Home
