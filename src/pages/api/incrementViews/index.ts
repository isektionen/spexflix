import type { NextApiRequest, NextApiResponse } from 'next';
import { projectId, dataset, apiVersion } from '../../../lib/sanity/env';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { productionSlug, videoSlug } = req.query;
  if (!productionSlug) {
    res.status(400).json({ error: 'missing production slug' });
    return;
  }
  if (!videoSlug) {
    res.status(400).json({ error: 'missing video slug' });
    return;
  }

  let videoArray: string;
  switch (req.query.videoType) {
    case 'video':
      videoArray = 'videos';
      break;
    case 'trailer':
      videoArray = 'trailers';
      break;
  }
  if (!videoArray) {
    res.status(400).json({ error: 'unknown or missing video type' });
    return;
  }

  const data = {
    mutations: [
      {
        patch: {
          query: `*[_type == "production" && slug.current == $productionSlug]`,
          params: {
            productionSlug,
          },
          inc: {
            [`${videoArray}[slug.current == "${req.query.videoSlug}"].views`]: 1,
          },
        },
      },
    ],
  };

  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  res.status(response.status).json(await response.json());
};

export default handler;
