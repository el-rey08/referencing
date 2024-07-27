const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    blogPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }
});

const commentModel = mongoose.model("comment", commentSchema);

module.exports = commentModel;