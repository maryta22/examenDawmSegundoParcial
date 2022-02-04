var mongoose = require("mongoose");

const animesScheme = new mongoose.Schema({
  _id: {
    type: mongoose.ObjectId,
  },
  ID: {
    type: String,
  },
  Title: {
    type: String,
  },
  Image: {
    type: String,
  },
  Synopsis: {
    type: String,
  },
  Type: {
    type: String,
  },
  Source: {
    type: String,
  },
  Score: {
    type: String,
  },
  URL: {
    type: String,
  },
});

mongoose.set("debug", true);

module.exports = mongoose.model("animes", animesScheme, "animes");