const express = require("express");
const { uploadShoes, getAllShoes } = require("../controllers/shoes");

const shoesRouter = express.Router();

shoesRouter.post("/upload", uploadShoes);
shoesRouter.get("/", getAllShoes);

module.exports = shoesRouter;