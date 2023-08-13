// Import Packages
import express from "express";

// Import files-functions
import { signupUser, loginUser } from "../controllers/authControllers.js";

const router = express.Router();

// Attach all routes
router.post("/signup", signupUser);
router.post("/login", loginUser);

export default router;
