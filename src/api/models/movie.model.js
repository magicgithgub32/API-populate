const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    year: { type: String, required: false, trim: true },
    director: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
