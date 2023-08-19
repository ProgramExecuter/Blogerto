// Import Packages
import express from "express";

// Import files-functions
import userRoutes from "./userRoutes.js";
import authRoutes from "./authRoutes.js";
import blogRoutes from "./blogRoutes.js";

const router = express.Router();

// Attach user routes
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/blogs", blogRoutes);

export default router;
