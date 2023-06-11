import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://localhost:7011/graphql/', // Replace with your backend GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
