//core
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

//routes
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

// initialise the app
const app = express();
//initialise the db
connectDB();

//routes
app.get("/", (req, res) => {
  res.send("api Running");
});

app.use("/api/products/", productRoutes);

const PORT = process.env.PORT || 5000;
const enviroment = process.env.NODE_ENV;

// set app to listen on port
app.listen(
  PORT,
  console.log(`Server running on ${PORT} and running in ${enviroment} mode`)
);
