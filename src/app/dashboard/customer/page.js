"use client"
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";


export default function customerOrder(){

  const [customerName,setcustomerName] = useState("");
  const [customerMobile,setcustomerMobile] = useState("");
  const [productList,setproductList] = useState([])
  const [customer_id,setcustomer_id] = useState("")
  const [order_id,setorder_id] = useState(null)
  const [orderProductList,setorderProductList] = useState([])

  var product_id = useRef("")
   var qty = useRef("")

  const customerNameInput = (cname) => {
    setcustomerName(cname.target.value)
    console.log(customerName);
  }
  const customerMobileInput = (cmobile) => {
    setcustomerMobile(cmobile.target.value)
    console.log(customerName);
  }
 
  const handleSubmit = async () => {
   
      var formData = {
        customer_name:customerName,
        customer_mobile:customerMobile
      }
      console.log(formData);
      axios.post("http://localhost:3000/api/customerOrder",formData) 
  .then((res) => {
    console.log(res);
     var customer_ids = res.data.data;
     console.log(customer_ids);
     setcustomer_id(customer_ids._id)
     console.log(customer_id);
  })
  .catch((error) => {
    console.error('Error fetching data:', error); 

  })
    
  };

  const addProduct = () => {

 
console.log(product_id.current.value);
var product = product_id.current.value;
var quanty = qty.current.value
var product = [{
  product_type_id:product,
  qty:quanty
}]
console.log(product);

    var formData = {
      products:product,
      customer_id :customer_id,
      order_id:order_id
    }
    console.log(formData);
    axios.post("http://localhost:3000/api/addCutomerProduct",formData)
.then((res) => {
console.log(res.data.data);
var order = res.data.data

var orderProducts = order[0]["products"]



console.log(orderProducts);
console.log(productList);
var orderProductsAll = [];

for(let i=0;i<orderProducts.length;i++){

  for(let j=0;j<productList.length;j++){

  if(orderProducts[i].product_type_id == productList[j]._id){
    orderProductsAll.push({...productList[j],qty:orderProducts[i].qty})
  }
}

}
setorderProductList(orderProductsAll)

var filteredOrderedProducts = productList.filter((orderedProduct) => {
  return  orderProducts.some((product) => {
   return product.product_type_id == orderedProduct._id
  }
    
    );
    
});
console.log(filteredOrderedProducts);
var order_length = order.length
var order_idss = order[order_length - 1]["_id"]
console.log(order_idss);
setorder_id(order_idss)


})
.catch((error) => {
  console.error('Error fetching data:', error); 

})
  }

  useEffect(() => {
    
    axios.get("http://localhost:3000/api/addProducts")
    .then((res) => {
      setproductList(res.data.data)
    })
  },[])

    return(<>
        <h4>Make Order</h4>
          <form className='row'>
         <div className="form-group col-md-6 mt-3">
                       <label for="select-image">Customer Name</label>
                       <input type="text" className="form-control" placeholder="Enter Name" onChange={customerNameInput}/>
   
                   </div>
                
   
                   <div className='col-md-6 mt-3'>
                     <label for="announceContent">Customer Mobile Number</label>
                     <input type="number" className="form-control" placeholder="Enter Number" onChange={customerMobileInput}/>
                   </div>
                  
   
   
   
                 </form>
                 <button className="btn btn-primary btn-sm mt-3 col-md-2 col-sm-4" onClick={handleSubmit}>Add customer</button>

                 <div>
                 <form className='row'>
                 <div className="form-group col-md-6 mt-3">
                       <label for="select-image">Product Type </label>
                       <select className="form-control" name="product_type_id" ref={product_id}>
        <option value="">Select Product Type</option>
        {
    
    productList.map((product) => (
          <option key={product._id} value={product._id}>
            {product.product_name}
          </option>
        ))
        }
      </select>
   
                   </div>
                
   
                   <div className='col-md-6 mt-3'>
                     <label for="announceContent">Qantity</label>
                     <input type="number" className="form-control" name="qty" ref={qty} placeholder="Enter Number" />
                   </div>
                  
   
   
   
                 </form>
                 <button type="submit" className="btn btn-primary btn-sm mt-3 col-md-2 col-sm-4" onClick={addProduct}>Add Product</button>

                 </div>


                 <div>

                 <table className="table table-bordered table-striped">
  <thead className="table-dark">
    <tr>
      <th>Product Name</th>
      <th>Product Price</th>
      <th>Quantity</th>
      <th>Total Price</th>

    </tr>
  </thead>
  <tbody>
    {orderProductList.length > 0 ? (
      orderProductList.map((product,index) => (
        <tr key={index}>
          <td>{product.product_name}</td>
          <td>{product.product_price}</td>
          <td>{product.qty}</td>
          <td>{product.product_price * product.qty}</td>

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
   
       
       </>)
}