const express = require("express");
const http = require("http");

const { ApolloServer } = require("apollo-server-express");
const { dbConnect } = require("./config/mongo");
const { apolloConfig } = require("./graphql");

const app = express();
// const httpserver = http.createServer(app);

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use("/seeding", require("./routes/seeding"));

// Graphql
const startServer = async () => {
  const apolloServer = new ApolloServer(apolloConfig);
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
};

// Mongo & Mongoose
dbConnect()
  .then(() => {
    startServer();
    app.listen({ port: 4000 }, () => {
      console.log(`🚀 Server ready at http://localhost:4000`);
    });
  })  
  .catch((err) => {
    console.log("mongo db connection failed", err)
  });
