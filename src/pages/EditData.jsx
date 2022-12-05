import React, { useState, useEffect } from "react";
import axios from "axios";
import instance from "../libs/axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const EditData = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [summary, setSummary] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

  useEffect(() => {
    getUserById();
    getCategory();
    
  }, []);

  const getCategory = async () => {
    const response = await instance.get(`/category`);
    
    console.log(response);
    setCategories(response.data);
      // setErrMsg('');
  }

  const updateData = async (e) => {
    console.log(image);
    e.preventDefault();
    // try {
    //   await instance.put(`/news/${id}`, {
    //     title,
    //     content,
    //     summary,
    //     categoryName,
    //     image,
    //     // categories,

    //   });
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    // }
    const formData = new FormData()

    formData.append('title', title);
    formData.append('content', content);
    formData.append('summary', summary);
    formData.append('image', image);
    formData.append('categoryId', categoryName);
    // console.log(data.get('image'))
    try {
      await instance.put(`/news/${id}`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
      }
      });
      // navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  const getUserById = async () => {
    const response = await instance.get(`/news/detail/${id}`);
    console.log(response);
    setTitle(response.data.title);
    setContent(response.data.content);
    setSummary(response.data.summary);
    setCategoryName(response.data.Category.name);
    setImage(response.data.image);
    // setCategories(response.data.categories);

    
    
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row justify-content-center">
      <div className="flex items-center justify-between my-4 text-center">
        <h2>Update Data</h2>
      </div>
      <div className="container mt-3 mb-2">
        <Link to={"/data"}>
            <button type="button" class="btn btn-primary"><MdArrowBack/>Back</button>
        </Link>
        </div>
        <div className="card p-5 bg-primary" style={{opacity:"50"}}>
    <div className="columns is-centered">
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
              <select name="categoriesId" id="categories" className='form-select' onChange={(e) => setCategoryName(e.target.value)} required>
                <option value={categoryName} selected>{categoryName}</option>
                {
                categories.map((item, id) => {
                return <option value={item.id}>{item.name}</option>
                })
                }
              </select>
            </div>
          <div className="mb-2 mt-4">
            <button type="submit" className="btn btn-success">Update</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default EditData;