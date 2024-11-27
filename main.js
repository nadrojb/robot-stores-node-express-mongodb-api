const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
const allProducts = require("./src/Controllers/allProductsController");
const singleProduct = require("./src/Controllers/singleProductController");
const categories = require("./src/Controllers/catergoriesController");

const app = express();
const port = 3001;

const url = "mongodb://root:password@localhost:27017";

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {});

//controller route. all of the below can go into one controller then exported as a group to make it even neater
app.get("/products", allProducts);

app.get("/products/:id", singleProduct);

app.get("/categories", categories);

app.get("/characters", async (req, res) => {
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
});

// app.post('/add', async (req, res) => {
//     const dataToInsert = req.body;
//     // do some validation here
//     const validated = {
//         title: dataToInsert.title
//         price: dataToInsert.price
//         category: dataToInsert.category
//         character: dataToInsert.character
//         title: dataToInsert.title
//         title: dataToInsert.title
//     };

//     if (!validated) {
//         return res.status(400).json({message: 'Invalid data.'})
//     }

//     try {
//         const connection = await MongoClient.connect(mongourl);
//         const result = await connection
//             .db('robot_stores')
//             .collection('people')
//             .insertOne(validatedDataToInsert);

//         if (result.insertedId !== null) {
//             return res.status(201).json({message: 'Success!'})
//         } else {
//             return res.status(400).json({message: 'Unable to insert.'})
//         }
//     } catch (error) {
//         return res.status(500).json({message: 'Something went wrong!', error: error})
//     }
// });

app.listen(port);
