const express = require("express");
const router = express.Router();
const { User, Hotel, Booking } = require("../schema/schemas");

router.post("/user", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json(user);
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/hotel", (req, res) => {
  const hotel = new Hotel(req.body);
  hotel
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json(hotel);
    })
    .catch((err) => res.status(400).json(err));
});

router.post("/booking", (req, res) => {
  const booking = new Booking(req.body);
  booking
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json(booking);
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
