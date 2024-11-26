const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = 3004;

const url = "mongodb://root:password@localhost:27017";

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {});

app.get("/products", async (req, res) => {
  try {
    const connection = await MongoClient.connect(url);

    const db = connection.db("robot_stores");
    const collection = db.collection("products");

    const allProducts = await collection.find({}).toArray();

    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({
      message: { message: "Unexpected error", data: [] },
    });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const productId = new ObjectId(req.params.id);
    const connection = await MongoClient.connect(url);

    const db = connection.db("robot_stores");
    const collection = db.collection("products");

    const product = await collection.findOne({ _id: productId });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: { message: "Unexpected error", data: [] },
    });
  }
});

app.get("/characters", async (req, res) => {
  try {
    const connection = await MongoClient.connect(url);

    const db = connection.db("robot_stores");
    const collection = db.collection.distinct("products");

    const character = await collection.distinct("character");

    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({
      message: { message: "Unexpected error", data: [] },
    });
  }
});

app.get("/categories", async (req, res) => {
  try {
    const connection = await MongoClient.connect(url);

    const db = connection.db("robot_stores");
    const collection = db.collection.distinct("products");

    const category = await collection.distinct("category");

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({
      message: { message: "Unexpected error", data: [] },
    });
  }
});

app.listen(port);
