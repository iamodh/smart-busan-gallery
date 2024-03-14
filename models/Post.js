const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  postTitle: {
    type: String,
    required: true,
  },

  postContent: {
    type: String,
    required: true,
  },

  writer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },

  views: {
    type: Number,
    default: 0,
  },

  ups: {
    type: Number,
    default: 0,
  },

  downs: {
    type: Number,
    default: 0,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
