"use client"
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Addcompany = () => {

    const [companyName,setcompanyName] = useState("");
    const [companyDesc,setcompanyDesc] = useState("");
    const [companyList,setcompanyList] = useState([])

    useEffect(() => {

      axios.get('http://localhost:3000/api/addCompany')
      .then((res) => {
        console.log(res.data.data);
        setcompanyList(res.data.data)
      })

    },[])
  
    const companyNameInput = (e) => {
      setcompanyName(e.target.value)
      console.log(companyName);
    }
    const companyDescInput = (e) => {
      setcompanyDesc(e.target.value)
      console.log(companyDesc);
    }
   
    const handleSubmit = async () => {
      try {
        var formData = {
            company_name:companyName,
            company_desc:companyDesc
        }
        console.log(formData);
        const response = await axios.post('http://localhost:3000/api/addCompany', formData);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  return (<> 
     <form className='row'>
         <div className="form-group col-md-6 mt-3">
                       <label for="select-image">company Name</label>
                       <input type="text" className="form-control" placeholder="Enter Name" onChange={companyNameInput}/>
   
                   </div>
                
   
                   <div className='col-md-6 mt-3'>
                     <label for="announceContent">Description</label>
                     <textarea className="form-control" placeholder="Enter Number" onChange={companyDescInput}></textarea>
                   </div>
                  
   
   
   
                 </form>
                 <button type="submit" className="btn btn-primary btn-sm mt-3 col-md-2 col-sm-4" onClick={handleSubmit}>Add company</button>

                 <div>

<table className="table table-bordered table-striped mt-5">
  <thead className="table-dark">
    <tr>
      <th>Category Name</th>
      <th>Category Description</th>
    

    </tr>
  </thead>
  <tbody>
    {companyList.length > 0 ? (
      companyList.map((product,index) => (
        <tr key={index}>
          <td>{product.company_name}</td>
          <td>{product.company_desc}</td>
       

        </tr>
      ))
    ) : (
      <tr>
        <td>ravi</td>
        <td>uthayam</td>
      </tr>
    )}
  </tbody>
</table>
</div>
</>  )
}

export default Addcompany