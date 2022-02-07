const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    username: String!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Hotel {
    id: ID!
    name: String!
    street: String!
    city: String!
    postalCode: String!
    price: Float!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type Booking {
    id: ID!
    user: User!
    hotel: Hotel!
    start: String!
    end: String!
    createdAt: String!
    updatedAt: String!
  }

  input BookingInput {
    user: ID!
    hotel: ID!
    start: String!
    end: String!
  }

  type Query {
    users: [User]
    user(email: String!): User
    hotels: [Hotel]
    hotel(id: ID!): Hotel
    hotelByName(name: String!): Hotel
    hotelByCity(city: String!): Hotel
    bookings: [Booking]
    userBooking(userId: ID!): [Booking]
    hotelBooking(hotelId: ID!): [Booking]
  } 

  type Mutation {
    login(loginInput: LoginInput!): User
  } 
`;

module.exports = {
  typeDefs,
}
