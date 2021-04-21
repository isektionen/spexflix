import { GraphQLClient, gql } from 'graphql-request'

const client = new GraphQLClient(process.env.GRAPHCMS_API_URL, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_AUTH_TOKEN}`,
  },
})

export default client
export { gql }
