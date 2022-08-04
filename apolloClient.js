import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  // TODO: get this value from env var after fixing search
  uri: 'https://g8f46yf6.api.sanity.io/v1/graphql/production/default',
  cache: new InMemoryCache()
})

export default client
