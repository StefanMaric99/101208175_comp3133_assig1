const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    createdAt: String
    updatedAt: String
  }

  input LoginInput {
    username: String!
    password: String!
  }

  type Hotel {
    id: ID
    name: String
    street: String
    city: String
    postalCode: String
    price: Float
    email: String
    createdAt: String!
    updatedAt: String!
  }

  type Booking {
    id: ID!
    user: ID!
    hotel: ID!
    date: String!
    booking_start: String!
    booking_end: String!
    createdAt: String!
    updatedAt: String!
  }

  input UserInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
  }

  input BookingInput {
    user: ID!
    hotel: ID!
    date: String!
    booking_start: String!
    booking_end: String!
  }

  type Query {
    users: [User]
    user(username: String!): User
    hotels: [Hotel]
    hotel(id: ID!): Hotel
    hotelByName(name: String!): Hotel
    hotelByCity(city: String!): Hotel
    bookings: [Booking]
    userBooking(userId: ID!): [Booking]
    hotelBooking(hotelId: ID!): [Booking]
  }

  type Mutation {
    createUser(userInput: UserInput!): Boolean
    login(loginInput: LoginInput!): Boolean
    logout: Boolean
  }
`;

module.exports = {
  typeDefs,
};
