const express = require("express");
const router = express.Router();
const {createPost, 
    getPosts, 
    getPost, 
    updatePost, 
    deletePost
} = require("../controller/postController")

router.post("/posts", createPost);
router.get("/posts", getPosts);
router.get("/posts/:postId", getPost);
router.put("/posts/:postId", updatePost);
router.delete("/posts/:postId", deletePost);

module.exports = router;