const {
  createCategory,
  updateCategory,
  getCategory,
  getCategories,
  deleteCategory,
} = require("../controllers/category.controllers");
const {
  createProduct,
  updateProduct,
  getProduct,
  getProducts,
  deleteProduct,
} = require("../controllers/product.controllers");
const {
  addReview,
  updateReview,
  getReviewByproduct,
} = require("../controllers/productReview.controllers");
const {
  isMerchant,
  isCustomer,
  verifyToken,
  isReviewOwner,
} = require("../middlewares");
const Category = require("../models/category.models");
const Product = require("../models/product.models");
const Review = require("../models/productReview.models");

const router = require("express").Router();
//   const  = require("../middlewares/verifyToken");

//param
//param product
router.param("product", async (req, res, next, id) => {
  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json("not found product");
    } else {
      req.product = product;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});
//param category
router.param("category", async (req, res, next, id) => {
  try {
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json("not found category");
    } else {
      req.category = category;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});
//param category
router.param("review", async (req, res, next, id) => {
  try {
    const review = await Review.findById(id);

    if (!review) {
      return res.status(404).json("not found review");
    } else {
      req.review = review;
      next();
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

//product routes
router.post("/product/:category", verifyToken, isMerchant, createProduct);
router.put("/:product", verifyToken, isMerchant, updateProduct);
router.get("/product/:product", getProduct);

router.get("/", getProducts);
router.delete("/:product", verifyToken, isMerchant, deleteProduct);

//category routes
router.post("/category", verifyToken, isMerchant, createCategory);
router.put("/category/:category", verifyToken, isMerchant, updateCategory);
router.get("/category/:categorySlug", verifyToken, getCategory);
router.get("/category", getCategories);
router.delete("/category/:category", verifyToken, isMerchant, deleteCategory);
//review routes
router.post("/:product/review", verifyToken, isCustomer, addReview);
router.put("/review/:review", verifyToken, isReviewOwner, updateReview);
//router.get("/:product/review", verifyToken, getReviewByproduct);

module.exports = router;
