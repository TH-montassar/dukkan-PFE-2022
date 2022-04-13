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
      author: currentUser,
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

const getReviewByproduct = async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 999;
  const product = req.product._id;
  try {
    const review = await Review.find(product).limit(limit);

    return res.status(200).json(review);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateReview = async (req, res) => {
  const id = req.review._id;
  try {
    const updateReview = await Review.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updateReview);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.addReview = addReview;
module.exports.updateReview = updateReview;
module.exports.getReviewByproduct = getReviewByproduct;
