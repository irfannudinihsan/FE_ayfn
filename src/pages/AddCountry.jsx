import React, { useState } from "react";
import axios from "../libs/axios";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";


const AddCountry = () => {
  const [name, setName] = useState("");
//   const [content, setContent] = useState("");
//   const [summary, setSummary] = useState("");
//   const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();

  const saveData = async (e) => {
    e.preventDefault();
    const formData = new FormData()

    formData.append('name', name);
    // formData.append('content', content);
    // formData.append('summary', summary);
    // formData.append('image', image);
    // formData.append('categoryId', categoryId);
    // console.log(data.get('image'))
    try {
      await axios.post(`/country`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
      }
      });
      // navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
    <NavbarAdmin/>
    <div className="container">
      <div className="row justify-content-center">
      <div className="flex items-center justify-between my-4 text-center">
        <h2>Create Data Country</h2>
      </div>
      <div className="container mt-3 mb-2">
      <Link to={"/country"}>
            <button type="button" class="btn btn-primary"><MdArrowBack/>Back</button>
        </Link>
        </div>
    <div className="columns is-centered">
      <div className="column is-half">
        <form onSubmit={saveData}>
        <div className="mb-3">
            <label htmlFor="label" className="form-label">Title</label>
            <textarea className="form-control input" 
                type="text"
                // className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // placeholder="Email"
            />
          </div>
          
          <div className="mb-2 mt-3">
            <button type="submit" className="btn btn-success">Create</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default AddCountry;