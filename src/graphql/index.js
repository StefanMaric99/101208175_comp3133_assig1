const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const middleware = {
  authCtx: () => {
    const context = { isAuth: false, user: null };
    return context
  }
}

module.exports.apolloConfig = { typeDefs, resolvers, context: ({ req, res }) => ({ req, res, auth: middleware['authCtx']() }), }