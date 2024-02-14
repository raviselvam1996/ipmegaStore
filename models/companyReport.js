import mongoose from "mongoose";

const {Schema} = mongoose;

const companyReport = new Schema({

    company_name:{
        type:String,
    },
    company_desc:{
        type:String,
     
    }
},{timestamps:true});

export default mongoose.models.companyReport || mongoose.model('companyReport',companyReport);