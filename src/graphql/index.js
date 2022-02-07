const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

module.exports.apolloConfig = { typeDefs, resolvers }