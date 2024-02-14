import mongoose from "mongoose";

const {Schema} = mongoose;

const categoryReport = new Schema({

    category_name:{
        type:String,
    },
    category_desc:{
        type:String,
     
    }
},{timestamps:true});

export default mongoose.models.categoryReport || mongoose.model('categoryReport',categoryReport);