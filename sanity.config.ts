import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { title, apiVersion, dataset, projectId } from './src/lib/sanity/env';
import productionSeriesType from './schema/productionSeries';
import productionType from './schema/production';
import videoType from './schema/video';

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
