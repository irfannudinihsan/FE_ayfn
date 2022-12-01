import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const AddData = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [countryId, setCountryId] = useState('');
  const [countries, setCountries] = useState([]);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const saveData = async (e) => {
    e.preventDefault();
    data.append('countryId', countryId);
    data.append('categoryId', categoryId);
    data.append('image', image);
    console.log(data.get('image'))
    try {
      await axios.post("/news", {
        title,
        content,
        summary,
        categoryId,
        
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios.get(`https://ayfnfebe29.up.railway.app/country`)
    .then(res => {
        setCountries(res.data)
    });
    // setErrMsg('');
  }, []);

  useEffect(() => {
    axios.get(`https://ayfnfebe29.up.railway.app/category`)
    .then(res => {
        setCategories(res.data)
    });
    // setErrMsg('');
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="row justify-content-center">
      <div className="flex items-center justify-between my-4 text-center">
        <h2>Create Data</h2>
      </div>
      <div className="container mt-3 mb-2">
        <Link to={"/data"}>
            <button type="button" class="btn btn-primary"><MdArrowBack/>Back</button>
        </Link>
        </div>
      <div className="card p-5 bg-primary" style={{opacity:"50"}}>
    <div className="columns is-centered">
      <div className="column is-half">
        <form onSubmit={saveData}>
        <div className="mb-3">
            <label htmlFor="label" className="form-label">Title</label>
            <textarea className="form-control input" 
                type="text"
                // className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                // placeholder="Email"
            />
          </div>
          {/* <div className="field">
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
          </div> */}
          <div className="form-group mb-3">
            <label htmlFor="image">Image</label>
              <input onChange={(e) => setImage(e.target.files[0])} type="file" className="form-control" placeholder="Image Link" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="label" className="form-label">Content</label>
            <textarea className="form-control input" rows="5"
                type="text"
                // className="input"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                // placeholder="Email"
            />
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
          </div> */}
          <div className="mb-3">
            <label htmlFor="label" className="form-label">Summary</label>
            <textarea className="form-control input" rows="3"
                type="text"
                // className="input"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                // placeholder="Email"
            />
          </div>
          {/* <div className="field">
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
          </div> */}
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
          {/* <div className="field">
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
          <div className='form-group mb-3'>
            <label htmlFor="countries">Country</label>
              <select name="countryId" id="countries" className='form-select' onChange={(e) => setCountryId(e.target.value)} required>
                <option value="" selected>Select Country</option>
                {
                countries.map((item, id) => {
                return <option value={item.id}>{item.name}</option>
                })
                }
              </select>
            </div>
          <div className="mb-2 mt-4">
            <button type="submit" className="btn btn-success">Create</button>
          </div>

          {/* <div className="mb-2">
            <Link to={"/data"} type="submit" className="btn btn-secondary">Back</Link>
          </div> */}
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

export default AddData;