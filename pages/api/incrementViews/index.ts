import type { NextApiRequest, NextApiResponse } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(process.env.GRAPHCMS_API_URL, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_MUTATION_AUTH_TOKEN}`,
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query.slug;
  if (!req.query.slug) {
    res.status(400).json({ error: 'missing slug' });
    return;
  }

  const { video } = await client.request(
    gql`
      query GetVideo($slug: String!) {
        video(where: { slug: $slug }) {
          views
        }
      }
    `,
    {
      slug,
    }
  );

  const views = video.views + 1;
  if (!video.views) {
    res.status(500).json({ error: 'unable to get current views' });
    return;
  }

  const { updateVideo, publishVideo } = await client.request(
    gql`
      mutation IncrementViews($slug: String!, $views: Int!) {
        updateVideo(where: { slug: $slug }, data: { views: $views }) {
          views
        }
        publishVideo(where: { slug: $slug }, to: PUBLISHED) {
          views
        }
      }
    `,
    {
      slug,
      views,
    }
  );

  if (updateVideo.views !== views) {
    res.status(500).json({ error: 'error updating views counter' });
    return;
  }

  if (publishVideo.views !== views) {
    res.status(500).json({ error: 'error publishing changes' });
    return;
  }

  res.status(200).json({ views: video.views });
};

export default handler;
