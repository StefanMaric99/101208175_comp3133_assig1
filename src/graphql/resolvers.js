const { User, Hotel, Booking } = require("../schema/schemas");

const resolvers = {
  Query: {
    users: async () => await User.find(),
    bookings: async () => await Booking.find(),
    hotelByName: async (_, { name }) => await Hotel.findOne({ name }),
    hotelByCity: async (_, { city }) => await Hotel.findOne({ city }),
    userBooking: async (_, { userId }) =>
      await Booking.findOne({ user: userId }),
    hotelBooking: async (_, { hotelId }) =>
      await Booking.findOne({ hotel: hotelId }),
    user: async (_, { username }) => await User.findOne({ username }),
  },
  Mutation: {
    createUser: async (_, { userInput }) => {
      const user = new User(userInput);
      user.save();
      return true;
    },
    login: async (_, { loginInput: { username, password } }, context) => {
      console.log(`New login attemp user '${username}' password '${password}'`);

      User.findOne({ username })
        .then((user) => {
          if (password === user.password) {
            context["auth"].isAuth = true;
            context["auth"].user = user;
            console.log("login successed", context["auth"]);
            return true;
          } else {
            console.log("wrong password");
            return false;
          }
        })
        .catch((err) => console.log(err));
      return true;
    },
    logout: async (_, __, context) => {
      console.log({ context });
      context["auth"].isAuth = false;
      context["auth"].user = null;
      return false;
    },
  },
};

module.exports = {
  resolvers,
};
