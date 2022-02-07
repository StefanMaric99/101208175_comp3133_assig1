const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    type: { type: String, enum: ['admin', 'customer'], default: "customer"}
  },
  { timestamps: true }
);

const HotelSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    postal_code: {type: String, required: true},
    price: {type: Number, required: true},
    email: {type: String, required: true},
    username: {type: String, required: true},
  },
  { timestamps: true }
);

const BookingSchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    booking_start: { type: Date, required: true },
    booking_end: { type: Date, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);


module.exports = {
  user: mongoose.model('user', UserSchema),
  hotel: mongoose.model('hotel', HotelSchema),
  booking: mongoose.model('booking', BookingSchema),
}