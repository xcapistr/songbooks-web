import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.SANITY_GRAPHQL_API_URL,
  cache: new InMemoryCache()
})

export default client
