import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(process.env.GRAPHQL_URL, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
  },
});

export default client;
export { gql };
