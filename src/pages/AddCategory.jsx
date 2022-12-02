import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const AddCategory = () => {
  const [name, setName] = useState("");
//   const [content, setContent] = useState("");
//   const [summary, setSummary] = useState("");
//   const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();

  const saveData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://ayfnfebe29.up.railway.app/category", {
        name,
        // content,
        // summary,
        // categoryId,
        
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <NavbarAdmin/>
    <div className="container">
      <div className="row justify-content-center">
      <div className="flex items-center justify-between my-4 text-center">
        <h2>Create Data Category</h2>
      </div>
      <div className="container mt-3 mb-2">
        <Link to={"/category"}>
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
          {/* <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // placeholder="Name"
              />
            </div>
          </div> */}
          {/* <div className="field">
            <label className="label">Content</label>
            <div className="control">
              <textarea
                type="text"
                className="input"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                // placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Summary</label>
            <div className="control">
              <textarea
                type="text"
                className="input"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                // placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">CategoryId</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                // placeholder="Name"
              />
            </div>
          </div> */}
          <div className="mb-2 mt-3">
            <button type="submit" className="btn btn-success">Create</button>
          </div>

          {/* <div className="mb-2">
            <Link to={"/category"} type="submit" className="btn btn-secondary">Back</Link>
          </div> */}
        </form>
      </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default AddCategory;