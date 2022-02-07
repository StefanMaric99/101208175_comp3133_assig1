const express = require("express");
const http = require("http");

const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql/resolvers");

const app = express();

const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
const httpserver = http.createServer(app);
startServer();

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000`)
});

