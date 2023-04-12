# Spexflix

[![Powered by Vercel](./public/powered-by-vercel.svg)](https://vercel.com/?utm_source=isektionen&utm_campaign=oss)

YouTube movie client with a familiar design. Configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)

## Getting started

### Requirements

- [Node.js 14.6.0](https://nodejs.org/) or newer
- [Yarn package manager](https://yarnpkg.com/)
- [Git command-line tool](https://git-scm.com/) (optional)

### Let's go!

1. Clone repo: `git clone https://github.com/isektionen/spexflix`
2. Copy the file `.env.example` to `.env` and fill out the desired settings. Refer to section [Environment variables](#-environment-variables).
3. Install dependicies: `yarn` or `npm i`
4. Run local server: `yarn dev` or `npm run dev`
5. Visit http://localhost:3000 to view the local site (your port might not be 3000)
6. Visit http://localhost:3000/studio to view the CMS tool, Sanity Studio (same port as for the site)

## Environment variables

| Name                              | Description                                                                                                                                                                                                   |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_TITLE`          | Title of site.                                                                                                                                                                                                |
| `NEXT_PUBLIC_SITE_DESCRIPTION`    | A short descriptive text of the site. Used in meta description.                                                                                                                                               |
| `NEXT_PUBLIC_PUBLISHER`           | Name of the content publisher.                                                                                                                                                                                |
| `NEXT_PUBLIC_COPYRIGHT_YEAR_FROM` | Starting year for copyright.                                                                                                                                                                                  |
|                                   |                                                                                                                                                                                                               |
| `SANITY_API_READ_TOKEN`           | Sanity API token with read access to your dataset.                                                                                                                                                            |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`   | Sanity project ID.                                                                                                                                                                                            |
| `NEXT_PUBLIC_SANITY_DATASET`      | Sanity dataset name. Please use `development` to allow local testing without affecting the production site.                                                                                                   |
| `NEXT_PUBLIC_SANITY_API_VERSION`  | Version of the Sanity API to use. Sanity uses ISO 8601-formatted UTC dates, such as 2023-04-11. Any past or present date is valid. Read more in the [Sanity docs](https://www.sanity.io/docs/api-versioning). |
