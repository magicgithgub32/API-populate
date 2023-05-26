const Movie = require("../models/movie.model");

const getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return next("Movies were not found", error);
  }
};

const createMovie = async (req, res, next) => {
  try {
    const newMovie = new Movie(req.body);
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return next("Error creating movie", error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    return res.status(200).json(movie);
  } catch (error) {
    return next("Movie not found", error);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(200).json(updatedMovie);
  } catch (error) {
    return next("Movie not found", error);
  }
};

const deleteMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteMovie = await Movie.findByIdAndDelete(id);
    return res.status(200).json("Movie deleted successfully");
  } catch (error) {
    return next("Movie not found", error);
  }
};

module.exports = {
  getAllMovies,
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovieById,
};
