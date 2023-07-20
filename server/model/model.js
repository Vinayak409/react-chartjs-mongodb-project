import mongoose, { mongo } from "mongoose";

const blogPostSchema = mongoose.Schema({
    month: String,
    number_of_posts: Number
});

const postModel = mongoose.model('blogPostModel', blogPostSchema);

export default postModel;