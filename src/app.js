// const { createServer } = require("@graphql-yoga/node");
const { GraphQLServer } = require('graphql-yoga');
const { dbConnect } = require("./config/mongo");
const { resolvers } = require("./graphql/resolvers");
const { typeDefs } = require("./graphql/typeDefs");

// const server = createServer({
//   schema: {
//     typeDefs: typeDefs,
//     resolvers: resolvers,
//   },
// });

const server  = new GraphQLServer({
  typeDefs,
  resolvers,
  // context:{
  //   pubsub
  // }
})

const options = {
  port: process.env.PORT || 4002
}


dbConnect()
  .then(() => {
    server.start(options, ({ port }) => {
      console.log(
        `Graphql Server started, listening on port ${port} for incoming requests.`,
      )
    })
    // server.start();
    // startServer();
    // app.listen(PORT, () => {
    //   console.log(`🚀 Server ready at http://localhost:4001`);
    // });
  })
  .catch((err) => {
    console.log("mongo db connection failed", err);
  });
