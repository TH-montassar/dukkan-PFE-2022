const {
  canceled,
  confirmed,
  fulfilled,
  createOrder,
  getOrder,
  getOrders,
  meOrders,
  getMYOrder,
} = require("../controllers/order.controllers");
const {
  verifyToken,
  isMerchant,
  isCustomer,
  verifyStore,
  isOrderOwner,
} = require("../middlewares");
const Order = require("../models/order.models");

const router = require("express").Router();

//params Order
router.param("order", async (req, res, next, id) => {
  try {
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json("not found order");
    } else {
      req.order = order;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/canceled/:order", verifyToken,  canceled);
router.put("/confirmed/:order", verifyToken,  confirmed);
router.put("/fulfilled/:order", verifyToken,  fulfilled);

router.get("/me", verifyToken, isCustomer,meOrders);
router.get("/GetOrderByStore", verifyToken,isMerchant, meOrders);
router.post("/", verifyToken, verifyStore, createOrder);

router.get("/getMYOrder/:order", verifyToken, isCustomer, isOrderOwner,getMYOrder);
router.get("/:order", verifyToken, isMerchant, getOrder);
router.get("/", verifyToken, isMerchant, getOrders);

module.exports = router;
