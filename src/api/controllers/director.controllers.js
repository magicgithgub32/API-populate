const Director = require("../models/director.model");

const getAllDirectors = async (req, res, next) => {
  try {
    const directors = await Director.find().populate("movies");
    return res.status(200).json(directors);
  } catch (error) {
    return next("Directors not found", error);
  }
};

const createDirector = async (req, res, next) => {
  try {
    const newDirector = new Director(req.body);
    const createdDirector = await newDirector.save();
    return res.status(201).json(createdDirector);
  } catch (error) {
    return next("Error creating director", error);
  }
};

const getDirectorById = async (req, res, next) => {
  try {
    const director = await Director.findById(req.params.id);
    return res.status(200).json(director);
  } catch (error) {
    return next("Director not found", error);
  }
};

const updateDirector = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedDirector = await Director.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(200).json(updatedDirector);
  } catch (error) {
    return next("Director not found", error);
  }
};

const deleteDirectorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteDirector = await Director.findByIdAndDelete(id);
    return res.status(200).json("Director deleted successfully");
  } catch (error) {
    return next("Director not found", error);
  }
};

module.exports = {
  getAllDirectors,
  createDirector,
  getDirectorById,
  updateDirector,
  deleteDirectorById,
};
