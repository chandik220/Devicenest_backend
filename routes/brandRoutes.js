import express from "express";
const router = express.Router();
import {
  getBrands,
  createBrand,
  deleteBrand,
} from "../controllers/brandController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
router.route("/").get(getBrands).post(protect, admin, createBrand);
router.route("/:id").delete(protect, admin, deleteBrand);
export default router;
