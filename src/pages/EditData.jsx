import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EditData = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [name, setName] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateData = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article/${id}`, {
        title,
        content,
        name,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article/${id}`);
    setTitle(response.data.title);
    setContent(response.data.content);
    setName(response.data.name);
  };

  return (
    <>
    <Navbar/>
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateData}>
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
            <label className="label">Name</label>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default EditData;