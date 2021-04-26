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
    {featured.length > 0 && <FeaturedVideo show={featured[0]} />}
    {shows.map((s) => (
      <PlaylistScroller key={s.id} show={s} />
    ))}
  </Layout>
)
export default ShowTypePage

export const getStaticProps: GetStaticProps = async (context) => {
  const { shows, featured, categories } = await graphcms.request(
    gql`
      query CategoryPage($name: Category!) {
        shows(where: { category: $name }) {
          title
          orTitle
          videos {
            slug
            title
          }
        }
        featured: shows(
          where: { category: $name, description_not: "", image: { id_not: "" } }
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
        categories: __type(name: "Category") {
          enumValues {
            name
          }
        }
      }
    `,
    {
      name: context.params.name,
    }
  )

  return {
    props: {
      shows,
      featured,
      categories: categories.enumValues.map((v) => v.name),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { categories } = await graphcms.request(
    gql`
      {
        categories: __type(name: "Category") {
          enumValues {
            name
          }
        }
      }
    `
  )

  return {
    paths: categories.enumValues.map((v) => ({
      params: {
        name: v.name,
      },
    })),
    fallback: false,
  }
}
