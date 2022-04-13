const Category = require("../models/category.models");
const Product = require("../models/product.models");

const createProduct = async (req, res) => {
  // console.log("this is from create product",req.verifiedUser._id)
  const newProduct = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.category._id,
    user: req.verifiedUser._id,
    image: req.body.image,
    //  promotionPrice:req.body.promotionPrice,
    reference: req.body.reference,
    // isPromotion: req.body.isPromotion
    countInStock: req.body.countInStock,
    store: req.verifiedUser.store,
  });
  //console.log( newProduct.category)
  try {
    const savedProduct = await newProduct.save();
    console.log(savedProduct);
    return res.status(201).json(savedProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const updateProduct = async (req, res) => {
  const id = req.product._id;

  try {
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updateProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getProduct = async (req, res) => {
  const productSlug = req.product.slug;
  try {
    // const product = await Product.findOne({ slug: productSlug }).populate({
    //   path: "category",
    //   select: "title",
    // });
    const product = await Product.aggregate([
      { $match: { slug: productSlug } },
      {
        $lookup: {
          from: "reviews",
          localField: "_id",
          foreignField: "product",
          as: "reviews",
        },
      },
    ]);
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getProducts = async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 999;
  // console.log(req.verifiedUser)
  let filter = {};
  if (req.query.category) {
    filter.category = await Category.findOne({
      slug: req.query.category,
    }).select("_id");
  }
  //console.log("this is from filter",filter);
  if (req.query.q) {
    filter.slug = { $regex: ".*" + req.query.q + ".*", $options: "i" };
  }
  try {
    const products = await Product.find(filter)
      .limit(limit)
      // .populate("user")
      .populate("category");
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.product._id;
  try {
    await Product.findByIdAndDelete(id);
    return res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.createProduct = createProduct;
module.exports.updateProduct = updateProduct;

module.exports.getProduct = getProduct;
module.exports.getProducts = getProducts;
module.exports.deleteProduct = deleteProduct;
