import { NextResponse } from "next/server";
import connect from "../../../../db";
import categoryReport from "../../../../models/categoryReport";

export const POST = async (request) => {
  try {
    const { category_name, category_desc } = await request.json();
    console.log("Title and Description:", { category_name, category_desc });

    await connect();
    await categoryReport.create({ category_name, category_desc });

    return new NextResponse(JSON.stringify({ message: "Success" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Error in fetching data", error, { status: 500 });
  }
};


export const GET = async (request) => {
  try {
       await connect();
       const posts = await categoryReport.find() 
       return new NextResponse(JSON.stringify({data:posts}),{status:200})

  }
  catch (error){
return new NextResponse('error in fetcing data',error,{status:500})

  }
}

export const DELETE = async (request) => {
  try {
    await connect();
    const urlParams = new URLSearchParams(request.url.split('?')[1]);
    const id = urlParams.get('id');
    console.log(id);
    const deletedCategory = await categoryReport.findByIdAndDelete(id);
    if (!deletedCategory) {
      return new NextResponse('Category not found', { status: 404 });
    }
    return new NextResponse(JSON.stringify({ message: 'Category deleted successfully' }), { status: 200 });
  } catch (error) {
    return new NextResponse('Error deleting category', error, { status: 500 });
  }
};