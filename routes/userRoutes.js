// Import Packages
import express from "express";

// Import files-functions
import {
  deleteUser,
  editUserDetials,
  getAllUsersDetails,
  getSingleUserDetials,
} from "../controllers/userControllers.js";

const router = express.Router();

// Attach all routes
router.get("/", getAllUsersDetails);
router.get("/:username", getSingleUserDetials);
router.patch("/:username", editUserDetials);
router.delete("/:username", deleteUser);

export default router;
