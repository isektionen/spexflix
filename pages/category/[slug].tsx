import { GetStaticProps, GetStaticPaths } from 'next'
import graphcms, { gql } from '../../lib/graphcms'

import Layout from '../../components/layout'
import PlaylistScroller from '../../components/playlistScroller'
import FeaturedVideo from '../../components/featuredVideo'

const ShowTypePage = ({ shows, featured, categories }): JSX.Element => (
  <Layout
    title={process.env.NEXT_PUBLIC_SITE_TITLE}
    copyrightFromYear={process.env.NEXT_PUBLIC_COPYRIGHT_FROM_YEAR}
    publisher={process.env.NEXT_PUBLIC_PUBLISHER}
    categories={categories}
  >
    {featured && <FeaturedVideo show={featured} />}
    {shows.map((s) => (
      <PlaylistScroller key={s.id} show={s} />
    ))}
  </Layout>
)
export default ShowTypePage

export const getStaticProps: GetStaticProps = async (context) => {
  const { shows, featured, categories } = await graphcms.request(
    gql`
      query CategoryPage($slug: String!) {
        shows(where: { showCategory: { slug: $slug }, orderBy: date_DESC }) {
          title
          orTitle
          videos {
            slug
            title
            youtubeVideoID
          }
        }
        featured: shows(
          where: {
            showCategory: { slug: $slug }
            description_not: ""
            image: { id_not: "" }
          }
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
    `,
    {
      slug: context.params.slug,
    }
  )

  return {
    props: {
      shows,
      categories,
      featured: featured.length > 0 ? featured[0] : null,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { categories } = await graphcms.request(
    gql`
      {
        categories: showCategories(orderBy: order_ASC) {
          name
          slug
        }
      }
    `
  )

  return {
    paths: categories.map((c) => ({
      params: {
        name: c.name,
        slug: c.slug,
      },
    })),
    fallback: false,
  }
}
