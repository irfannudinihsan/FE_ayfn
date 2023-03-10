import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import axios from "../libs/axios";

const AddData = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [countryId, setCountryId] = useState("");
  const [countries, setCountries] = useState([]);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const saveData = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("summary", summary);
    formData.append("image", image);
    formData.append("categoryId", categoryId);

    try {
      await axios.post(`/news`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/data");
    } catch (error) {
      console.log(error.response);
    }
  };

  // useEffect(() => {
  //   axios.get(`https://ayfnfebe29.up.railway.app/country`)
  //   .then(res => {
  //       setCountries(res.data)
  //   });
  //   // setErrMsg('');
  // }, []);

  useEffect(() => {
    axios.get(`https://ayfnfebe29.up.railway.app/category`).then((res) => {
      setCategories(res.data);
    });
    // setErrMsg('');
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="flex items-center justify-between my-4 text-center">
            <h2>Create Data</h2>
          </div>

          <Link to={"/data"}>
            <button type="button" className="btn btn-lg">
              <MdArrowBack />
            </button>
          </Link>

          <div
            className="news-detail-background container px-5 py-4 mb-5 rounded-4"
            style={{ backgroundColor: "#F9FBFF" }}>
            <form onSubmit={saveData}>
              <div className="field my-3">
                <label htmlFor="label" className="form-label">
                  Title
                </label>
                <div className="control">
                  <input
                    className="input border-0 p-2"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                  />
                </div>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="image">Image</label>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  className="form-control border-0"
                  placeholder="Image Link"
                  required
                />
              </div>
              <div className="field my-3">
                <label htmlFor="label" className="form-label">
                  Content
                </label>
                <textarea
                  className="form-control input border-0"
                  rows="5"
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Content"
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
              <div className="field my-3">
                <label htmlFor="label" className="form-label">
                  Summary
                </label>
                <div className="control">
                  <textarea
                    className="form-control input border-0"
                    rows="3"
                    type="text"
                    // className="input"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Summary"
                  />
                </div>
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
              <div className="form-group mb-3">
                <label htmlFor="categories">Category</label>
                <select
                  name="categoriesId"
                  id="categories"
                  className="form-select border-0"
                  onChange={(e) => setCategoryId(e.target.value)}
                  required>
                  <option value="">Select Category</option>
                  {categories.map((item, id) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
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
              {/* <div className='form-group mb-3'>
            <label htmlFor="countries">Country</label>
              <select name="countryId" id="countries" className='form-select' onChange={(e) => setCountryId(e.target.value)} required>
                <option value="" selected>Select Country</option>
                {
                countries.map((item, id) => {
                return <option value={item.id}>{item.name}</option>
                })
                }
              </select>
            </div> */}
              <div className="mb-2 mt-4">
                <button type="submit" className="btn btn-success">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddData;
