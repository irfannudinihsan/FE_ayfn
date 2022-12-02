import React, { useState, useEffect } from "react";
import axios from "axios";
import instance from "../libs/axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EditData = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [summary, setSummary] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateData = async (e) => {
    e.preventDefault();
    try {
      await instance.patch(`/news/${id}`, {
        title,
        content,
        summary,
        categoryId,
        image,
        // categories,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await instance.get(`/news/detail/${id}`);
    console.log(response);
    setTitle(response.data.title);
    setContent(response.data.content);
    setSummary(response.data.summary);
    setCategoryId(response.data.categoryId);
    setImage(response.data.image);
    // setCategories(response.data.categories);

    useEffect(() => {
      instance.get(`/category`)
      .then(res => {
          setCategories(res.data)
      });
      // setErrMsg('');
    }, []);
    
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row">
      <div className="flex items-center justify-between my-4">
        <h2>Update Data</h2>
      </div>
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
          <div className="form-group mb-3">
            <label htmlFor="image">Image</label>
              <input onChange={(e) => setImage(e.target.files[0])} type="file" className="form-control" placeholder="Image Link" required/>
          </div>
          <div className="field">
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
          <div className='form-group mb-3'>
            <label htmlFor="categories">Category</label>
              <select name="categoriesId" id="categories" className='form-select' onChange={(e) => setCategoryId(e.target.value)} required>
                <option value="" selected>Select Category</option>
                {
                categories.map((item, id) => {
                return <option value={item.id}>{item.name}</option>
                })
                }
              </select>
            </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
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

export default EditData;