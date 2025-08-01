import foodModel from "../models/foodModel.js";
import imagekit from "../config/imagekit.js";

// Add Food
const addFood = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    // Image upload to ImageKit
    const uploadedImage = await imagekit.upload({
      file: req.file.buffer,
      fileName: `${Date.now()}_${req.file.originalname}`,
    });

    const food = new foodModel({
      name,
      description,
      price,
      category,
      image: uploadedImage.url,
    });

    await food.save();
    res.json({ success: true, message: "Food Added", food });
  } catch (error) {
    console.error("Add Food Error: ", error.message);
    res.status(500).json({ success: false, message: "Error adding food" });
  }
};

// List Food
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error("List Food Error: ", error.message);
    res.status(500).json({ success: false, message: "Error" });
  }
};

// Remove Food
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    await foodModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.error("Remove Food Error: ", error.message);
    res.status(500).json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
