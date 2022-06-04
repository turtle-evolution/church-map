import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject
} from '@apollo/client';

const createApolloClient = (
  authToken: string
): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://turtle-evolution-85.hasura.app/v1/graphql',
      headers: {
        'x-hasura-admin-secret': `${authToken}`
      }
    }),
    cache: new InMemoryCache()
  });
};

export default createApolloClient;
