# Spexflix

[![Powered by Vercel](./public/powered-by-vercel.svg)](https://vercel.com/?utm_source=isektionen&utm_campaign=oss)

YouTube movie client with a familiar design. Configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks

## Get started

1. Clone repo: `git clone https://github.com/isektionen/spexflix`
2. Copy the file `.env.example` to `.env` and fill out the desired settings. Refer to section [Environment variables](#-environment-variables).
3. Install dependicies: `yarn` or `npm i`
4. Run local server: `yarn dev` or `npm run dev`

## Environment variables

| Name                              | Description                                                     |
| --------------------------------- | --------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_TITLE`          | Title of site.                                                  |
| `NEXT_PUBLIC_SITE_DESCRIPTION`    | A short descriptive text of the site. Used in meta description. |
| `NEXT_PUBLIC_PUBLISHER`           | Name of the content publisher.                                  |
| `NEXT_PUBLIC_COPYRIGHT_YEAR_FROM` | Starting year for copyright.                                    |
| `GRAPHQL_URL`                     | GraphCMS endpoint URL.                                          |
| `GRAPHQL_TOKEN`                   | GraphCMS access token.                                          |
