const { MongoClient } = require("mongodb");
const url = "mongodb://root:password@localhost:27017";

const characters = async (req, res) => {
  try {
    const connection = await MongoClient.connect(url);

    const db = connection.db("robot_stores");
    const collection = db.collection("products");

    const character = await collection.distinct("character");

    res.status(200).json({
      message: "Successfully found characters.",
      data: character,
    });
  } catch (error) {
    res.status(500).json({
      message: { message: "Unexpected error", data: [] },
    });
  }
};

module.exports = characters;
