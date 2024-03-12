const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  postTitle: {
    type: String,
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

  recommend: [
    {
      type: Number,
      defalut: 0,
    },
  ],
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
