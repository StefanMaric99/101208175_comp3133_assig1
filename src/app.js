// const { createServer } = require("@graphql-yoga/node");
const { GraphQLServer } = require('graphql-yoga');
const { dbConnect } = require("./config/mongo");
const { resolvers } = require("./graphql/resolvers");
const { typeDefs } = require("./graphql/typeDefs");

const server  = new GraphQLServer({
  typeDefs,
  resolvers,
})

const options = {
  port: process.env.PORT || 4000
}

dbConnect()
  .then(() => {
    server.start(options, ({ port }) => {
      console.log(
        `Graphql Server started, listening on port ${port} for incoming requests.`,
      )
    })
  })
  .catch((err) => {
    console.log("mongo db connection failed", err);
  });
