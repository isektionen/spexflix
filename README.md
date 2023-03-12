# YouFlix

[![Powered by Vercel](./public/powered-by-vercel.svg)](https://vercel.com/?utm_source=isektionen&utm_campaign=oss)

YouTube movie client with a familiar interface configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## Get started

1. Clone repo: `git clone https://github.com/vmorsell/react-youflix`
1. Copy the file `.env.example` to `.env` and fill out the desired settings. Refer to section [Environment variables](#-environment-variables).
1. Install dependicies: `npm i` or `yarn`
1. Run local server: `npm start` or `yarn start`

## Environment variables

| Name                              | Description                                                     |
| --------------------------------- | --------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_TITLE`          | Title of site.                                                  |
| `NEXT_PUBLIC_SITE_DESCRIPTION`    | A short descriptive text of the site. Used in meta description. |
| `NEXT_PUBLIC_PUBLISHER`           | Name of the content publisher.                                  |
| `NEXT_PUBLIC_COPYRIGHT_YEAR_FROM` | Starting year for copyright.                                    |
| `GRAPHCMS_API_URL`                | GraphCMS endpoint URL.                                          |
| `GRAPHCMS_ACCESS_TOKEN`           | GraphCMS access token.                                          |
