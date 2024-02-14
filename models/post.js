import mongoose from "mongoose";

const {Schema} = mongoose;

const postSchema = new Schema({
    title:String,
    description:String
},{timestamps:true});

// export default mongoose.models.post || mongoose.model('post',postSchema);
const Posts = mongoose.models.post || mongoose.model('post',postSchema);
export default Posts