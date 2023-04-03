import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { title, apiVersion, dataset, projectId } from './sanity/env';
import productionSeriesType from './schemas/productionSeries';
import productionType from './schemas/production';
import videoType from './schemas/video';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    types: [productionSeriesType, productionType, videoType],
  },
  plugins: [
    deskTool(),
    // Vision lets you query your content with GROQ in the studio.
    // // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
