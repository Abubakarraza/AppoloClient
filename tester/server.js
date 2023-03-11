import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import typeDefs from './SchemaGql.js';
import resolvers from './resolvers.js';
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
server
  .listen()
  .then(({ url }) => console.log(`server is runing at ${url}`))
  .catch((e) => console.log(e));
