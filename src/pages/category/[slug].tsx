import { GetStaticProps, GetStaticPaths } from 'next';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity/client';
import { Production } from '../../../schema/production';
import { ProductionSeries } from '../../../schema/productionSeries';

import Layout from '../../components/layout';
import PlaylistScroller from '../../components/playlistScroller';
import FeaturedVideo from '../../components/featuredVideo';

export interface QueryResult {
  productionSeries: Pick<ProductionSeries, 'title' | 'slug'>[];
  productions: Pick<
    Production,
    'title' | 'orTitle' | 'description' | 'slug' | 'coverImage'
  >[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const query = groq`
        {
        "productionSeries": *[_type == "productionSeries"]{
          title,
          slug
        },
        "productions": *[_type == "production" && productionSeries->slug.current == $slug]{
          title,
          orTitle,
          description,
          slug,
          productionSeries->,
          "coverImage": coverImage.asset->,
          videos[] {
            title,
            slug,
            youtubeUrl,
            "coverImage": coverImage.asset->
          }
        }
      }
    `;

  const { productionSeries, productions }: QueryResult = await client.fetch(
    query,
    {
      slug: context.params.slug,
    }
  );

  return {
    props: {
      productionSeries,
      productions,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = groq`
{
      "productionSeries": *[_type == "productionSeries"]{
        title,
        slug
      }
}
      `;

  const { productionSeries }: { productionSeries: ProductionSeries[] } =
    await client.fetch(query);

  return {
    paths: productionSeries.map((ps) => ({
      params: {
        name: ps.title,
        slug: ps.slug.current,
      },
    })),
    fallback: false,
  };
};

const CategoryPage = ({
  productionSeries,
  productions,
}: QueryResult): JSX.Element => (
  <Layout
    title={process.env.NEXT_PUBLIC_SITE_TITLE}
    copyrightFromYear={process.env.NEXT_PUBLIC_COPYRIGHT_FROM_YEAR}
    publisher={process.env.NEXT_PUBLIC_PUBLISHER}
    productionSeries={productionSeries}
  >
    {productions.length > 0 && <FeaturedVideo production={productions[0]} />}
    {productions.map((p) => (
      <PlaylistScroller key={p.slug.current} production={p} />
    ))}
  </Layout>
);
export default CategoryPage;
