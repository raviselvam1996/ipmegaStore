import { NextResponse } from "next/server";
import connect from "../../../../db";
import companyReport from "../../../../models/companyReport";

export const POST = async (request) => {
  try {
    const { company_name, company_desc } = await request.json();
    console.log("Title and Description:", { company_name, company_desc });

    await connect();
    await companyReport.create({ company_name, company_desc });

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
       const posts = await companyReport.find() 
       return new NextResponse(JSON.stringify({data:posts}),{status:200})

  }
  catch (error){
return new NextResponse('error in fetcing data',error,{status:500})

  }
}