const { getStoreWithProduct } = require("../controllers/store.controllers");

const router = require("express").Router();
router.get("/", getStoreWithProduct);

module.exports = router;
