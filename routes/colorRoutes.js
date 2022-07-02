import express from "express";
const router = express.Router();
import {
  getColor,
  createColor,
  deleteColor,
} from "../controllers/colorController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
router.route("/").get(getColor).post(protect, admin, createColor);
router.route("/:id").delete(protect, admin, deleteColor);
export default router;
