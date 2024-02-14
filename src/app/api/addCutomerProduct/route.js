import { NextResponse } from "next/server";
import connect from "../../../../db";
import Posts from "../../../../models/post";
import customerOrder from "../../../../models/customerOrder";


export const POST = async (request) => {
  try {
    const { customer_id, products,order_id } = await request.json();
    var datass = { customer_id, products,order_id } 
    console.log(datass);
    const customerId = datass.customer_id;
    console.log(customerId);
    const existingCustomer = await customerOrder.findById(customerId);

    if(datass.order_id){
// Find the specific order within the customer's orders array
const existingOrder = existingCustomer.orderDetailes.id(datass.order_id);
// Add a new product to the order's products array
existingOrder.products.push(datass.products[0]); 
console.log(datass.products[0]);

    }else{
   // Add a new order to the customer's orders array
  existingCustomer.orderDetailes.push({products:datass.products});
    }
    var order =  await existingCustomer.save();
    return new NextResponse(JSON.stringify({ message: "Success",data:order.orderDetailes }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Error in fetching data", error, { status: 500 });
  }
};

export const GET = async (request) => {
  try {
    // const { category_name, category_desc } = await request.json();
    // console.log("Title and Description:", { category_name, category_desc });

    await connect();
    const orderList = await customerOrder.find() 

    // await categoryReport.create({ category_name, category_desc });

    return new NextResponse(JSON.stringify({ message: "Success",data:orderList }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Error in fetching data", error, { status: 500 });
  }
};
