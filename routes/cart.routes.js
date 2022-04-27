const {
  getOwnedCart,
  addItemToCart,
  removeItemFromCart,
  emptyCart,
} = require("../controllers/cart.controllers");
const { verifyStore, verifyToken } = require("../middlewares");

const router = require("express").Router();

router.get("/me", verifyToken, verifyStore, getOwnedCart);
router.put("/empty", verifyToken, verifyStore, emptyCart);

router.put("/add", verifyToken, verifyStore, addItemToCart);
router.put("/remove", verifyToken, verifyStore, removeItemFromCart);

module.exports = router;
