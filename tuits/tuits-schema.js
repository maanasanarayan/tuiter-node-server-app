import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    tuit: String,
    likes: Number,
    liked: Boolean,
    handle: String,
    username: String,
    title: String,
    image: String,
    topic: String,
    time: String,
    dislikes: Number,
  },
  { collection: "tuits" }
);
export default schema;
