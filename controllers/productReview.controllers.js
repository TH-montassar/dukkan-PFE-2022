const Review = require("../models/productReview.models");

const addReview = async (req, res) => {
  const product = req.product._id;
  const currentUser = req.verifiedUser._id;

  const alreadyReviewed = (
    await Review.find({
      $and: [{ product: product }, { user: currentUser }],
    })
  ).length;

  console.log(alreadyReviewed);
  if (alreadyReviewed) {
    return res.status(401).json("Product already Reviewed");
  }

  try {
    const newReview = new Review({
      user: currentUser,
      rating: req.body.rating,
      product: product,
      comment: req.body.comment,
    });
    const savedReview = await newReview.save();
    return res.status(201).json(savedReview);
  } catch (err) {
    return res.status(500).json(err);
  }
};
module.exports.addReview = addReview;
