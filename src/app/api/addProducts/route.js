import { NextResponse } from "next/server";
import connect from "../../../../db";
import productsReport from "../../../../models/productsReport";
export const POST = async (request) => {
  try {
    const { product_type_id, product_code,product_name,total_stock,company_id,product_price,manufacture_date,expriy_date } = await request.json();
    console.log("Title and Description:", { product_type_id, product_code,product_name,total_stock,company_id,product_price,manufacture_date,expriy_date });

    await connect();
    await productsReport.create({ product_type_id, product_code,product_name,total_stock,company_id,product_price,manufacture_date,expriy_date });

    return new NextResponse(JSON.stringify({ message: "Success" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Error in fetching data", error, { status: 500 });
  }
};

// export const GET = async (request) => {
//   try {
//        await connect();
//        const posts = await productsReport.find() 
//        return new NextResponse(JSON.stringify({data:posts}),{status:200})

//   }
//   catch (error){
// return new NextResponse('error in fetcing data',error,{status:500})

//   }
// }

export const GET = async (request) => {
  try {
    await connect();
    const productList = await productsReport.find() 
    return new NextResponse(JSON.stringify({ message: "Success",data:productList }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Error in fetching data", error, { status: 500 });
  }
}; 