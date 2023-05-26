const express = require("express");

const {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovieById,
  getMovieById,
} = require("../controllers/movie.controllers");

const MovieRouter = express.Router();

MovieRouter.get("/", getAllMovies);
MovieRouter.post("/", createMovie);
MovieRouter.get("/:id", getMovieById);
MovieRouter.put("/:id", updateMovie);
MovieRouter.delete("/:id", deleteMovieById);

module.exports = MovieRouter;
