// Import Packages
import express from "express";
import mongoose from "mongoose";

// Import files-functions
import apiRoutes from "./routes/index.js";
import loadEnv from "./utils/loadEnv.js";

const app = express();

/*
    Middlewares
*/
loadEnv(); // To process some sensitive info. from env variables
app.use(express.json()); // To parse the form data as JSON

// Attach API Routes
app.use("/api", apiRoutes);

/*
    Mongoose DB connection
*/
mongoose
  .connect(process.env.MONGOURI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error ", err.message));

/*
    Server Setup
*/
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
