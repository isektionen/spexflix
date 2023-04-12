export const title = process.env.NEXT_PUBLIC_SITE_TITLE || 'Next.js project';

const d = new Date();
const today = `${d.getUTCFullYear}-${d.getUTCMonth}-${d.getUTCDate}`;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || today;

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const token = process.env.SANITY_API_TOKEN;

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
