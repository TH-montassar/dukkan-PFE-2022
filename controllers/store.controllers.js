const Store = require("../models/store.models");
const mongoose = require("mongoose");
const getMyStore = async (req, res) => {
  const StoreId = req.verifiedUser.store;

  try {
    const store = await Store.findById(StoreId);
    return res.status(200).json(store);

    //  await Product.populate(product, { path: "category", select: "title" });
  } catch (err) {
    return res.status(500).json(err);
  }
};
module.exports.getMyStore = getMyStore;
