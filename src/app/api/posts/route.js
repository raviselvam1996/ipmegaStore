import { NextResponse } from "next/server";
import connect from "../../../../db";
import post from "../../../../models/post";

export const GET = async (request) => {
    try {
         await connect();
         const posts = await post.find() 
         return new NextResponse(JSON.stringify(posts),{status:200})

    }
    catch (error){
return new NextResponse('error in fetcing data',error,{status:500})

    }


}