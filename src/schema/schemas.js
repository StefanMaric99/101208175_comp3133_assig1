const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    type: { type: String, enum: ["admin", "customer"], default: "customer" },
  },
  { timestamps: true }
);

const HotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    postal_code: { type: String, required: true },
    price: { type: Number, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

const BookingSchema = new mongoose.Schema(
  {
    date: { type: String, required: true },
    booking_start: { type: Date, required: true },
    booking_end: { type: Date, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    hotel: { type: Schema.Types.ObjectId, ref: 'Hotel' },
  },
  { timestamps: true }
);

module.exports = {
  User: mongoose.model("user", UserSchema),
  Hotel: mongoose.model("hotel", HotelSchema),
  Booking: mongoose.model("booking", BookingSchema),
};
