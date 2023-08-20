// Import Packages
import express from "express";

// Import files-functions
import {
  deleteUser,
  editUserDetails,
  getAllUsersDetails,
  getSingleUserDetails,
} from "../controllers/userControllers.js";
import { checkLoggedInUser } from "../utils/utils.js";

const router = express.Router();

// Attach all routes
router.get("/", getAllUsersDetails);
router.get("/:username", getSingleUserDetails);
router.patch("/:username", checkLoggedInUser, editUserDetails);
router.delete("/:username", checkLoggedInUser, deleteUser);

export default router;
