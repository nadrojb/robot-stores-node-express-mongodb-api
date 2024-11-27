const { MongoClient } = require("mongodb");
const url = "mongodb://root:password@localhost:27017";

const allProducts = async (req, res) => {
  try {
    const connection = await MongoClient.connect(url);

    const db = connection.db("robot_stores");
    const collection = db.collection("products");

    const allProducts = await collection.find({}).toArray();

    res.status(200).json({
      message: "Successfully found products.",
      data: allProducts,
    });
  } catch (error) {
    res.status(500).json({ message: "Unexpected error", data: [] });
  }
};

module.exports = allProducts;
