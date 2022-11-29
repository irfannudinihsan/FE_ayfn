import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AddData = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();

  const saveData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article", {
        title,
        content,
        name,
        
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveData}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                // placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Content</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                // placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AddData;