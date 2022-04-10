const { User, Hotel, Booking, Auth } = require("../schema/schemas");

const currentUser = async () => {
  let auth = await Auth.find();
  return auth[0];
}

const resolvers = {
  Query: {
    users: async () => {
      let auth = await Auth.find();
      if (auth.length === 0) return null;

      auth = auth[0]
      console.log(auth['type'])
      if (auth['type'] === "admin") {
        return await User.find()
      } else {
        let user = await User.findById(auth['userId'])
        return [user];
      }
    },
    bookings: async () => await Booking.find(),
    hotels: async () => await Hotel.find(),
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
    createHotel: async (_, { hotelInput }) => {
      const hotel = new Hotel(hotelInput);
      hotel.save();
      return true;
    },
    createBooking: async (_, { bookingInput }) => {
      const booking = new Booking(bookingInput);
      booking.save();
      return true
    },
    login: async (_, { loginInput: { username, password } }) => {
      console.log(`New login attemp user '${username}' password '${password}'`);

      return User.findOne({ username })
        .then((user) => {
          if (password === user.password) {
            const { _id, username, type, email } = user;
            const authInput = { userId: _id, username, type, email };
            const auth = new Auth(authInput);
            auth.save();
            return true
          } else {
            console.log("wrong password");
            return false
          }
        })
        .catch((err) => console.log(err));
      // return true;
    },
    logout: async () => {
      const auth = await currentUser();
      Auth.deleteMany({ userId: auth['userId'] })
        .then(res => {
          console.log(res);
          return true;
        })
        .catch(err => {
          console.log(err)
          return false;
        })
    },
  },
};

module.exports = {
  resolvers,
};
