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
    const createProduct = async (req, res) => {
        const dataToInsert = req.body;
        
        let validated = {}
        let dataOk = true;
        
        if (isString(dataToInsert.title)) {
            validated.title = dataToInsert.title
        } else {
            dataOk = false;
        }
    
        if (isNumber(dataToInsert.price)) {
            validated.price = Number(dataToInsert.price)
        } else {
            dataOk = false;
        }
    
        if (isURL(dataToInsert.image)) {
            validated.image = dataToInsert.image
        } else {
            dataOk = false;
        }
        // the rest
        
        if (!dataOK) {
            return res.status(400).json({message: 'Invalid data.', error: error.message})
        }
}});

app.listen(port);
