import express from "express";
import authUser from "../middlewares/authUser.js";
import {
  getAllOrders,
  getUserOrder,
  PlaceOrderCOD,
  PlaceOrderStripe,
} from "../controllers/orderController.js";
import authSeller from "../middlewares/authSeller.js";

const orderRouter = express.Router();

orderRouter.post("/cod", authUser, PlaceOrderCOD);
orderRouter.post("/stripe", authUser, PlaceOrderStripe);
orderRouter.get("/user", authUser, getUserOrder);
orderRouter.get("/seller", authSeller, getAllOrders);

export default orderRouter;
