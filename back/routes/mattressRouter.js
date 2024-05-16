const express = require("express");
const router = express.Router();
const { getReq, postReq, patchReq, deleteReq } = require("../controllers/ItemController");
const Mattress = require("../models/mattress");

router.route("/")
.get(getReq(Mattress))
.post(postReq(Mattress))
.patch(patchReq(Mattress))
.delete(deleteReq(Mattress))


module.exports = router;