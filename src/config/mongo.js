const mongoose = require("mongoose");

const db = `mongodb+srv://${"stefan"}:${"SeriesXupgrade12$"}@cluster0.83wye.mongodb.net/${"airbnb"}`;
// const db = `mongodb+srv://${"stefan"}:${"SeriesXupgrade12$"}@cluster0.83wye.mongodb.net/${"airbnb"}?retryWrites=true&w=majority`;

module.exports.dbConnect = async() => {
  return await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}