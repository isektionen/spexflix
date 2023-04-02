import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { title, apiVersion, dataset, projectId } from './sanity/env';
import productionSeriesType from './schemas/productionSeries';
import productionType from './schemas/production';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    types: [productionSeriesType, productionType],
  },
  plugins: [
    deskTool(),
    // Vision lets you query your content wiht GROQ in the studio.
    // // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
