const Store = require("../models/store.models");
const mongoose = require("mongoose");
const getStoreWithProduct = async (req, res) => {
  const currentUserStore = req.query.store;
  console.log(currentUserStore === undefined);
  try {
    if (currentUserStore === undefined) {
      const store = await Store.aggregate([
        {
          $lookup: {
            from: "products",
            localField: "_id",
            foreignField: "store",
            as: "products",
          },
        },
      ]).sort({ createdAt: -1 });
      return res.status(200).json(store);
    }

    const store = await Store.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(currentUserStore) } },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "store",
          as: "products",
        },
      },
    ]).sort({ createdAt: -1 });
    return res.status(200).json(store);

    //  await Product.populate(product, { path: "category", select: "title" });
  } catch (err) {
    return res.status(500).json(err);
  }
};
module.exports.getStoreWithProduct = getStoreWithProduct;
