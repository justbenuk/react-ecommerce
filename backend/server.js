//core
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// data
import products from "./data/products.js";

dotenv.config();

// initialise the app
const app = express();
//initialise the db
connectDB();

//routes
app.get("/", (req, res) => {
  res.send("api Running");
});

//get list of products
app.get("/api/products", (req, res) => {
  res.json(products);
});

//get a single product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
const enviroment = process.env.NODE_ENV;

// set app to listen on port
app.listen(
  PORT,
  console.log(`Server running on ${PORT} and running in ${enviroment} mode`)
);
