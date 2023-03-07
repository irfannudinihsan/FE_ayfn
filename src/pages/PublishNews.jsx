import React, { useState, useEffect } from "react";
// import axios from "axios";
import instance from "../libs/axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const PublishNews = () => {
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

  const data = async (e) => {
    // console.log(image);
    e.preventDefault();
    const formData = new FormData()

    formData.append('title', title);
    formData.append('content', content);
    formData.append('summary', summary);
    formData.append('image', image);
    formData.append('categoryId', categoryName);
    // console.log(data.get('image'))
    try {
      await instance.put(`/news/proceed/${id}`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
      }
      });
      navigate("/homeadmin");
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
        <h2>News</h2>
      </div>
     
        <Link to={"/formadmin"}>
            <button type="button" class="btn btn-lg">
              <MdArrowBack />
            </button>
          </Link>
          <div className="news-detail-background container px-5 py-4 rounded-4"
            style={{ backgroundColor: "#F9FBFF" }}>
    
        <form onSubmit={data}>
          <div className="field-3">
            <label className="label">Title</label>
            <div className="control">
              <input
              className="input border-0 p-2"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="image">Image</label>
              <input onChange={(e) => setImage(e.target.files[0])} type="file" className="form-control border-0" placeholder="Image Link" required/>
          </div>
          <div className="field my-3">
            <label className="label">Content</label>
            <div className="control">
              <textarea
                type="text"
                className="form-control input border-0"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                // placeholder="Email"
              />
            </div>
          </div>
          <div className="field my-3">
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
            <button type="submit" className="btn btn-success">Publish</button>
          </div>
        </form>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default PublishNews;