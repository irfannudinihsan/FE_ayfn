import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AddCountry = () => {
  const [name, setName] = useState("");
//   const [content, setContent] = useState("");
//   const [summary, setSummary] = useState("");
//   const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();

  const saveData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://ayfnfebe29.up.railway.app/country", {
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
    <Navbar/>
    <div className="container">
      <div className="row">
      <div className="flex items-center justify-between my-4">
        <h2>Create Data</h2>
      </div>
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveData}>
          <div className="field">
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
          </div>
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
          <div className="mb-2">
            <button type="submit" className="btn btn-primary">Create</button>
          </div>

          {/* <div className="mb-2">
            <Link to={"/"} type="submit" className="btn btn-secondary">Back</Link>
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

export default AddCountry;