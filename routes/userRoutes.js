// Import Packages
import express from "express";

// Import files-functions
import {
  deleteUser,
  editUserDetails,
  getAllUsersDetails,
  getSingleUserDetails,
} from "../controllers/userControllers.js";

const router = express.Router();

// Attach all routes
router.get("/", getAllUsersDetails);
router.get("/:username", getSingleUserDetails);
router.patch("/:username", editUserDetails);
router.delete("/:username", deleteUser);

export default router;
