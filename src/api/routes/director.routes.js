const express = require("express");
const {
  getAllDirectors,
  createDirector,
  updateDirector,
  deleteDirectorById,
  getDirectorById,
} = require("../controllers/director.controllers");

const DirectorRouter = express.Router();

DirectorRouter.get("/", getAllDirectors);
DirectorRouter.post("/", createDirector);
DirectorRouter.get("/:id", getDirectorById);
DirectorRouter.put("/:id", updateDirector);
DirectorRouter.delete("/:id", deleteDirectorById);

module.exports = DirectorRouter;
