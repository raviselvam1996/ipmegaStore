import mongoose from "mongoose";

const {Schema} = mongoose;

const orderSchema = new Schema({
    products: [{
        // Define properties for each product in the order
        product_type_id: String,
        qty: Number,
    }],
    orderDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
        default: 'Pending'
    }
}, { timestamps: true });

const customerOrder = new Schema({

    customer_name:{
        type:String,
    },
    customer_mobile:{
        type:Number,
     
    },
    orderDetailes:[orderSchema]
},{timestamps:true});

export default mongoose.models.customerOrder || mongoose.model('customerOrder',customerOrder);


