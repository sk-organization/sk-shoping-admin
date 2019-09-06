import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import { GRAPHQL_HOST } from './constants';

export default new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_HOST,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    mutate: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
  },
});
