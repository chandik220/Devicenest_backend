import asyncHandler from "express-async-handler";
import Brand from "../models/brandModel.js";

// @desc     Fetch all brand
// @route   GET api/brand
// @access   Private
const getBrands = asyncHandler(async (req, res) => {
  const brands = await Brand.find({});
  res.json({ data: brands });
});

// @desc     Create brand
// @route   Post api/brand
// @access   Private
const createBrand = asyncHandler(async (req, res) => {
  const { name, type } = req.body;
  const brand = new Brand({
    name,
    type,
  });
  const createdBrand = await brand.save();
  res.status(201).json(createdBrand);
});

// @desc     Delete brand
// @route   Delete api/brand
// @access   Private
const deleteBrand = asyncHandler(async (req, res) => {
  const brand = await Brand.findById(req.params.id);
  if (brand) {
    await brand.remove();
    res.json({ message: "Brand Removed" });
  } else {
    res.status(404);
    throw new Error("Brand not found");
  }
});
export { getBrands, createBrand, deleteBrand };
