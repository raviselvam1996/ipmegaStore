import mongoose from "mongoose";

const {Schema} = mongoose;

const productReport = new Schema({

 
    product_type_id:{
        type:String,
     
    },
    product_code:{
        type:String,
     
    },
    product_name:{
        type:String,
    },
    total_stock:{
        type:Number,
     
    },
    company_id:{
        type:String,
    },
    product_price:{
        type:String,
     
    },
    manufacture_date:{
        type:String,
    },
    expriy_date:{
        type:String,
     
    },

},{timestamps:true});

export default mongoose.models.productReport || mongoose.model('productReport',productReport);