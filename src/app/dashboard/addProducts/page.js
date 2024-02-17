"use client"
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const AddProduct = () => {

  const [categoryList,setCategoryList] = useState([])
  const [companyList,setCompanyList] = useState([])
  const [productList,setproductList] = useState([])


  const [loading,setLoading]=useState(true);

  const [productsInputs,setproductsInputs] = useState({ product_type:null,
                                                        product_code:"",
                                                        total_stock:"",
                                                        company_name:"",
                                                        product_price:"",
                                                        manufacture_date:"",
                                                        expriy_date:""
                                                      })


const productHandler=(e) => {
 var objName = e.target.name
 console.log(objName);
 console.log(e.target.value);
  setproductsInputs((prev) => {
    return {...prev,[objName]:e.target.value}

  })

}

const productSubmit = () =>{
  console.log(productsInputs);
var formData = productsInputs;
  axios.post("http://localhost:3000/api/addProducts",formData)
  .then((res) => {
console.log(res);
getproductList();

  })
  .catch((error) => {
    console.error('Error fetching data:', error); 

  })
}

  useEffect(() =>{

    getproductList();

axios.get("http://localhost:3000/api/addCategory")
.then((res) => {
  setLoading(false);
  setCategoryList(res.data.data);

})
.catch((error) => {
  console.error('Error fetching data:', error);

})

axios.get("http://localhost:3000/api/addCompany") 
.then((res) => {
setCompanyList(res.data.data)
})

  },[])
  const getproductList = async () => {

    await axios.get("http://localhost:3000/api/addProducts").then((res) => {
      console.log(res.data.data);
      setproductList(res.data.data)
    });
  }
  const deleteProduct = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(`http://localhost:3000/api/addProducts?id=${id}`);
      console.log(response.data); // Assuming the API returns a message
      getproductList();
      // Handle success, if needed
    } catch (error) {
      console.error('Error deleting category:', error.response.data);
      // Handle error, if needed
    }
console.log(id);
   }
  return (<>
       <form className='row'>
         <div className="form-group col-md-6 mt-3">
                       <label for="select-image">Product Type </label>
                       <select className="form-control" name="product_type_id" onChange={productHandler}>
        <option value="">Select Product Type</option>
        {
    
     categoryList.map((cate) => (
          <option key={cate._id} value={cate._id}>
            {cate.category_name}
          </option>
        ))
        }
      </select>
   
                   </div>
                   <div className='col-md-6 mt-3'>
                     <label for="announceContent">Product Code</label>
                     <input type="text" className="form-control" name="product_code" placeholder="Enter Number" onChange={productHandler}/>
                   </div>
                   <div className="form-group col-md-6 mt-3">
                       <label for="select-image">Product Name</label>
                       <input type="text" className="form-control" name="product_name" placeholder="Enter Name" onChange={productHandler}/>
   
                   </div>
                
   
                   <div className='col-md-6 mt-3'>
                     <label for="announceContent">Total Stock</label>
                     <input type="number" className="form-control" name="total_stock" placeholder="Enter Number" onChange={productHandler} />
                   </div>
                  
                   <div className="form-group col-md-6 mt-3">
                       <label for="select-image">Select Company </label>
                       <select className="form-control" name="company_id" onChange={productHandler}>

                        <option>Select Option</option>
                        {
                          companyList.map((com) => {

                            return <option value={com._id} key={com._id}>{com.company_name}</option>
                          })
                        }
                       </select>
   
                   </div>

                   <div className='col-md-6 mt-3'>
                     <label for="announceContent">Cost Per Item</label>
                     <input type="number" className="form-control" name="product_price" placeholder="Enter Number" onChange={productHandler}/>
                   </div>


                   <div className='col-md-6 mt-3'>
                     <label for="announceContent">Manufacture Date</label>
                     <input type="date" className="form-control" name="manufacture_date" onChange={productHandler}/>
                   </div>

                   <div className='col-md-6 mt-3'>
                     <label for="announceContent">Expiry Date</label>
                     <input type="date" className="form-control" name="expriy_date" onChange={productHandler}/>
                   </div>
   
   
                 </form>
                 <button type="submit" onClick={productSubmit} className="btn btn-primary btn-sm mt-3 col-md-2 col-sm-4">Add Customer</button>

                 <div>

<table className="table table-bordered table-striped mt-5">
  <thead className="table-dark">
    <tr>
      <th>Action</th>
      <th>Product Name</th>
      <th>Product Price</th>
      <th>Total Stock</th>
      <th>Manufacture Date</th>
      <th>Expriy Date</th>



    

    </tr>
  </thead>
  <tbody>
    {productList.length > 0 ? (
      productList.map((product,index) => (
        <tr key={index}>
          <td><button className="btn btn-danger" onClick={() => deleteProduct(product._id)}>Delete</button></td>
          <td>{product.product_name}</td>
          <td>{product.product_price}</td>
          <td>{product.total_stock}</td>
          <td>{product.manufacture_date}</td>
          <td>{product.expriy_date}</td>

       

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

export default AddProduct