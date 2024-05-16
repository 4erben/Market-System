const express = require("express");
const { getReq, postReq, patchReq, deleteReq } = require("../controllers/ItemController");
const Cushion = require("../models/cushion");
const router = express.Router();

router.route("/")
.get(getReq(Cushion))
.post(postReq(Cushion))
.patch(patchReq(Cushion))
.delete(deleteReq(Cushion))
module.exports = router;