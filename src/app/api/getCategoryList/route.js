import { NextResponse } from "next/server";
import connect from "../../../../db";
import categoryReport from "../../../../models/categoryReport";

export const GET = async (request) => {
  try {
    // const { category_name, category_desc } = await request.json();
    // console.log("Title and Description:", { category_name, category_desc });

    await connect();
    const categoryList = await categoryReport.find() 
    

    // await categoryReport.create({ category_name, category_desc });

    return new NextResponse(JSON.stringify({ message: "Success",data:categoryList }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Error in fetching data", error, { status: 500 });
  }
};
 

// export const DELETE = async (request) => {
//   try {
//     await connect();
//     console.log(request);
//     const { id } = request.query;
//     console.log(id);
//     const deletedCategory = await categoryReport.findByIdAndDelete(id);
//     if (!deletedCategory) {
//       return new NextResponse('Category not found', { status: 404 });
//     }
//     return new NextResponse(JSON.stringify({ message: 'Category deleted successfully' }), { status: 200 });
//   } catch (error) {
//     return new NextResponse('Error deleting category', error, { status: 500 });
//   }
// };