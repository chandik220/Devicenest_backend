import asyncHandler from "express-async-handler";
import Color from "../models/colorModel.js";

// @desc     Fetch all color
// @route   GET api/color
// @access   Private
const getColor = asyncHandler(async (req, res) => {
  const colors = await Color.find({});
  res.json({ data: colors });
});

// @desc     Create color
// @route   Post api/color
// @access   Private
const createColor = asyncHandler(async (req, res) => {
  const { name, code } = req.body;
  const color = new Color({
    name,
    code,
  });
  const createdBrand = await color.save();
  res.status(201).json(createdBrand);
});

// @desc     Delete color
// @route   Delete api/color
// @access   Private
const deleteColor = asyncHandler(async (req, res) => {
  const color = await Color.findById(req.params.id);
  if (color) {
    await color.remove();
    res.json({ message: "Color Removed" });
  } else {
    res.status(404);
    throw new Error("Color not found");
  }
});
export { getColor, createColor, deleteColor };
