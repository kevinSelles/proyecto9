require("dotenv").config();

const express = require("express");
const { connectDB } = require("./src/config/db");
const shoesRouter = require("./src/api/routes/shoes.js");

const app = express();
connectDB();

app.use("/shoes", shoesRouter);

app.listen(3000, () => {
 console.log("http://localhost:3000");
})