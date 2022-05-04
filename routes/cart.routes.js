const {
  getOwnedCart,
  addItemToCart,
  removeItemFromCart,
  emptyCart,
  getMyCarts,
} = require("../controllers/cart.controllers");
const { verifyStore, verifyToken, isCustomer } = require("../middlewares");

const router = require("express").Router();

router.get("/me", verifyToken, verifyStore, getOwnedCart);
router.get("/myCarts", verifyToken, isCustomer, getMyCarts);
router.put("/empty", verifyToken, verifyStore, emptyCart);

router.put("/add", verifyToken, verifyStore, addItemToCart);
router.put("/remove", verifyToken, verifyStore, removeItemFromCart);

module.exports = router;
