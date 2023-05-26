const mongoose = require("mongoose");

const DirectorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    DOB: { type: String, required: false, trim: true },
    movies: [
      {
        type: mongoose.Types.ObjectId,
        required: true,
        trim: true,
        ref: "Movie",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Director = mongoose.model("Director", DirectorSchema);
module.exports = Director;
