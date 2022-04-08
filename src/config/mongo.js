const mongoose = require("mongoose");

let db;

const prod = `mongodb+srv://${"stefan"}:${"SeriesXupgrade12$"}@cluster0.83wye.mongodb.net/${"airbnb"}?retryWrites=true&w=majority`;
const prod2 = `mongodb+srv://${"stefan"}:${"SeriesXupgrade12$"}@cluster0.83wye.mongodb.net/${"airbnb"}`;
const test = `mongodb://localhost:27017/${"hotelapp"}`;

console.log("NODE_ENV", process.env.NODE_ENV);

if (process.env.NODE_ENV == "production") {
  db = prod;
} else {
  db = prod;
}

module.exports.dbConnect = async () => {
  return await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
