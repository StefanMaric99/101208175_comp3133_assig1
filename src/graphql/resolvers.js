const { User } = require("../schema/schemas");

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    users: () => User.find(),
  },
};


module.exports = {
  resolvers
}