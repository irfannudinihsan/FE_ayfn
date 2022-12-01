import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EditCategory = () => {
    const [name, setName] = useState("");
    // const [content, setContent] = useState("");
    // const [summary, setSummary] = useState("");
    // const [categoryId, setCategoryId] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateData = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://ayfnfebe29.up.railway.app/category/${id}`, {
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

  const getUserById = async () => {
    const response = await axios.get(`https://ayfnfebe29.up.railway.app/category/${id}`);
    setName(response.data.name);
    // setContent(response.data.content);
    // setName(response.data.name);
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row">
      <div className="flex items-center justify-between my-4">
        <h2>Edit Data</h2>
      </div>
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateData}>
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
            <button type="submit" className="btn btn-primary">Update</button>
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

export default EditCategory;