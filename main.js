const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
const allProducts = require("./src/Controllers/allProductsController");
const singleProduct = require("./src/Controllers/singleProductController");
const categories = require("./src/Controllers/catergoriesController");
const characters = require("./src/Controllers/charactersController");
const url = "mongodb://root:password@localhost:27017";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/products", allProducts);

app.get("/products/:id", singleProduct);

app.get("/categories", categories);

app.get("/characters", characters);

app.post("/add", async (req, res) => {
  const dataToInsert = req.body;
  // do some validation here
  const validated = {
    title: "hat",
    price: "24",
    category: "aprons",
    character: "rex",
  };

  if (!validated) {
    return res.status(400).json({ message: "Invalid data." });
  }

  try {
    const connection = await MongoClient.connect(mongourl);
    const result = await connection
      .db("robot_stores")
      .collection("products")
      .insertOne(validatedDataToInsert);

    if (result.insertedId !== null) {
      return res.status(201).json({ message: "Success!" });
    } else {
      return res.status(400).json({ message: "Unable to insert." });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong!", error: error });
  }
});

app.listen(port);
