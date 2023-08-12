// Import Packages
import express from "express";

// Import files-functions
import { getAllUsersDetails } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getAllUsersDetails);

export default router;
