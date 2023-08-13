// Import Packages
import express from "express";

// Import files-functions
import apiRoutes from "./routes/index.js";

const app = express();

// Middlewares
app.use(express.json()); // To parse the form data as JSON

// Attach API Routes
app.use("/api", apiRoutes);

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
