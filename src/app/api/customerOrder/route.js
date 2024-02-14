import { NextResponse } from "next/server";
import connect from "../../../../db";
import Posts from "../../../../models/post";
import customerOrder from "../../../../models/customerOrder";

// export async function POST(request) {
//     console.log(request);

//         const{title,description} = await request.JSON()
//          await connect();
//          await Posts.create({title,description})
//          return new NextResponse.json({message:"sucesss"},{status:200})

// }
// export const POST = async (request) => {
//   try {
//     const { title, description } = await request.json();
//     console.log("Title and Description:", { title, description });

//     await connect();
//     await Posts.create({ title, description });

//     return new NextResponse(JSON.stringify({ message: "Success" }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     return new NextResponse("Error in fetching data", error, { status: 500 });
//   }
// };

export const POST = async (request) => {
  try {
    const { customer_name, customer_mobile } = await request.json();
    console.log("Title and Description:", { customer_name, customer_mobile });

    await connect();
   const datas =  await customerOrder.create({ customer_name, customer_mobile });

    return new NextResponse(JSON.stringify({ message: "Success",data: datas}), {
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