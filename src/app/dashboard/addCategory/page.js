"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const AddCategory = () => {
  const [categoryName, setcategoryName] = useState("");
  const [categoryDesc, setcategoryDesc] = useState("");
  const [categoryList, setcategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {

await axios.get("http://localhost:3000/api/addCategory").then((res) => {
  console.log(res.data.data);
  setcategoryList(res.data.data);
});
  }
  const categoryNameInput = (e) => {
    setcategoryName(e.target.value);
    console.log(categoryName);
  };
  const categoryDescInput = (e) => {
    setcategoryDesc(e.target.value);
    console.log(categoryDesc);
  };

  const handleSubmit = async () => {
    try {
      var formData = {
        category_name: categoryName,
        category_desc: categoryDesc,
      };
      console.log(formData);
      const response = await axios.post(
        "http://localhost:3000/api/addCategory",
        formData
      );
      console.log("Response:", response.data);
      getCategoryList();
    } catch (error) {
      console.error("Error:", error);
    }
  };

   const deleteCategory = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(`http://localhost:3000/api/addCategory?id=${id}`);
      console.log(response.data); // Assuming the API returns a message
      getCategoryList();
      // Handle success, if needed
    } catch (error) {
      console.error('Error deleting category:', error.response.data);
      // Handle error, if needed
    }
console.log(id);
   }




  return (
    <>
      <form className="row">
        <div className="form-group col-md-6 mt-3">
          <label for="select-image">Category Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            onChange={categoryNameInput}
          />
        </div>

        <div className="col-md-6 mt-3">
          <label for="announceContent">Description</label>
          <textarea
            className="form-control"
            placeholder="Enter Number"
            onChange={categoryDescInput}
          ></textarea>
        </div>
      </form>
      <button
        type="submit"
        className="btn btn-primary btn-sm mt-3 col-md-2 col-sm-4"
        onClick={handleSubmit}
      >
        Add Category
      </button>

      <div>
        <table className="table table-bordered table-striped mt-5">
          <thead className="table-dark">
            <tr>
              <th>Category Name</th>
              <th>Category Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categoryList.length > 0 ? (
              categoryList.map((product, index) => (
                <tr key={index}>
                  <td>{product.category_name}</td>
                  <td>{product.category_desc}</td>
                  <td><button className="btn btn-danger" onClick={() => deleteCategory(product._id)}>Delete</button></td>
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
    </>
  );
};

export default AddCategory;
