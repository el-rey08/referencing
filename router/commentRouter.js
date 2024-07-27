const express = require("express");
const {
  createComment,
  getComments,
  deleteComment,
  updateComment,
} = require("../controller/commentController");
const router = express.Router();

router.post("/posts", createComment);
router.get("/posts", getComments);
router.put("/posts/:comid", updateComment);
router.delete("/posts/:comid", deleteComment);
module.exports = router;
