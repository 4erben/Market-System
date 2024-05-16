const express = require("express");
const router = express.Router();
const Cover = require("../models/cover");
const { getReq, postReq, patchReq, deleteReq } = require("../controllers/ItemController");

router.route("/")
.get(getReq(Cover))
.post(postReq(Cover))
.patch(patchReq(Cover))
.delete(deleteReq(Cover))

module.exports = router;