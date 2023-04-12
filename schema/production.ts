import { defineField, defineType, Slug, Asset } from 'sanity';
import { format, parseISO } from 'date-fns';
import productionSeriesType, { ProductionSeries } from './productionSeries';
import { Video } from './video';

export interface Production {
  title: string;
  slug: Slug;
  orTitle?: string;
  description?: string;
  productionSeries: ProductionSeries;
  premiereDate?: string;
  videos?: Video[];
  trailers?: Video[];
  posterImage?: Asset;
  coverImage?: Asset;
}

export default defineType({
  name: 'production',
  title: 'Produktion',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'orTitle',
      title: 'Eller-titel',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Beskrivning',
      type: 'text',
    }),
    defineField({
      name: 'productionSeries',
      title: 'Produktionsserie',
      type: 'reference',
      to: [{ type: productionSeriesType.name }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'premiereDate',
      title: 'Premiärdatum',
      type: 'date',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'videos',
      title: 'Inspelningar',
      type: 'array',
      of: [
        {
          type: 'video',
        },
      ],
    }),
    defineField({
      name: 'trailers',
      title: 'Trailers',
      type: 'array',
      of: [
        {
          type: 'video',
        },
      ],
    }),
    defineField({
      name: 'posterImage',
      title: 'Poster',
      type: 'image',
    }),
    defineField({
      name: 'coverImage',
      title: 'Omslagsbild',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'premiereDate',
      media: 'posterImage',
    },
    prepare({ title, media, date }) {
      const subtitle = date && format(parseISO(date), 'LLL d, yyyy');
      return { title, media, subtitle };
    },
  },
});
