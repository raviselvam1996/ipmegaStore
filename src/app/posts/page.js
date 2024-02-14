import { notFound } from "next/navigation";
import React from "react";



async function getData(){

    const res = await fetch('http://localhost:3000/api/posts',{cache:"no-store"});

    if(!res) return notFound();
  return res.json();
}


const Posts = async () => {
var data = await getData();
console.log(data);
    return (<>
    
    <div>
        {data.map((post) => {
          return  <div>

<p>{post.title}</p>
<p>{post.description}</p>


            </div>
           
        })}
        <p>jksdfhkjdshkfhdshfk</p>
    </div>
    </>)
}

export default Posts;