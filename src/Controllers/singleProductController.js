const { MongoClient, ObjectId } = require("mongodb");
const url = require("../../environment");



const singleProduct = async (req, res) => {
  const id = new ObjectId(req.params.id);

  try {
    const connection = await MongoClient.connect(url);
    const product = await connection
      .db("robot_stores")
      .collection("products")
      .findOne({ _id: id });

    return res.json({
      message: "Successfully found product.",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({ message: "Unknown product ID", data: [] });
  }
};

module.exports = singleProduct;
