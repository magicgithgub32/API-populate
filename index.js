const express = require("express");
const connect = require("./src/utils/connect");
require("dotenv").config();

const PORT = process.env.PORT;

const server = express();
connect();

server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: false }));

const MovieRouter = require("./src/api/routes/movie.routes");
server.use("/api/v1/movies", MovieRouter);

const DirectorRouter = require("./src/api/routes/director.routes");
server.use("/api/v1/directors", DirectorRouter);

server.use("*", (req, res, next) => {
  const error = new Error("Route not found 🤔");
  return next(error);
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 😀`);
});
