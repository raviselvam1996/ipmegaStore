"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const OrderReport = () => {

  const [orderList,setorderList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/addCutomerProduct")
    .then((res) => {
      setorderList(res.data.data);
      console.log(orderList);
    
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    
    })  },[])
    console.log(orderList);

  return (
<>
<table className="table table-bordered table-striped">
  <thead className="table-dark">
    <tr>
      <th>S.no</th>
      <th>Order Id</th>
      <th>Customer Name</th>
      <th>Customer Mobile</th>
      <th>Order Date</th>
    </tr>
  </thead>
  <tbody>
    {orderList.length > 0 ? (
      orderList.map((order,index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{order._id}</td>
          <td>{order.customer_name}</td>
          <td>{order.customer_mobile}</td>
          <td>{order.createdAt}</td>

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

</>
    )
}

export default OrderReport