const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

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

app.listen(port);
