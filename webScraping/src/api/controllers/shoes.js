const Shoe = require("../models/shoes");
const shoes = require("../../../shoes.json");

const uploadShoes = async (req, res, next) => {
  try {
    await Shoe.insertMany(shoes);
    res.status(201).json("Productos subidos con éxito.");
  } catch (error) {
    res.status(400).json("Error al subir los productos.");
  }
}

const getAllShoes = async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.status(200).json(shoes);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error al obtener los productos.");
  }
};

module.exports = { uploadShoes, getAllShoes };