import { NextResponse } from "next/server";
import connect from "../../../../db";
import productsReport from "../../../../models/productsReport";
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
