import { NextResponse } from "next/server";
import connect from "../../../../db";
import companyReport from "../../../../models/companyReport";

export const GET = async (request) => {
  try {
    // const { company_name, company_desc } = await request.json();
    // console.log("Title and Description:", { company_name, company_desc });

    await connect();
    const companyList = await companyReport.find() 

    // await companyReport.create({ company_name, company_desc });

    return new NextResponse(JSON.stringify({ message: "Success",data:companyList }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Error in fetching data", error, { status: 500 });
  }
};
