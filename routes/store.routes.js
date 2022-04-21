const { getMyStore } = require("../controllers/store.controllers");
const { verifyToken } = require("../middlewares");

const router = require("express").Router();
router.get("/me",verifyToken, getMyStore);

module.exports = router;
