import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache()

export default new ApolloClient({
  cache,
  uri: 'http://localhost:5000',
})
