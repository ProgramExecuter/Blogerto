// Import Packages
import express from "express";

// Import files-functions
import userRoutes from "./userRoutes.js";

const router = express.Router();

// Attach user routes
router.use("/user", userRoutes);

export default router;