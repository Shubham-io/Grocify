import User from "../models/User.js";

// Update User CartData : /api/cart/update

export const updateCart = async (req, res) => {
  try {
    // userId is comming form middleware
    const userId = req.userId;
    const {cartItems } = req.body;
    const result = await User.findByIdAndUpdate(userId, { cartItems });
    res.json({ success: true, message: "Cart Updated", result });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
