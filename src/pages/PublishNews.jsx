import React, { useState, useEffect } from "react";
// import axios from "axios";
import instance from "../libs/axios";
import { useNavigate, useParams } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const PublishNews = () => {
  const [news, setNews] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [isPublished, setIsPublished] = useState(false);

  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [summary, setSummary] = useState("");
  // const [categoryName, setCategoryName] = useState("");
  // const [categories, setCategories] = useState([]);
  // const [image, setImage] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(news, "ini news");
  console.log(isPublished, "belum pubished");

  useEffect(() => {
    getNewsById();
    // getCategory();
  }, []);

  const getNewsById = async () => {
    const response = await instance.get(`/news/detail/${id}`);
    setNews(response.data);
    setIsPublished(response.data.isPublished);
    setIsloading(false);
  };

  const handlePublish = async () => {
    try {
      await instance.put(`/news/proceed/${id}`, {
        isPublished: true,
      });
      setIsPublished(!isPublished);
      navigate("/FormAdmin");
    } catch (error) {
      console.log(error.response);
    }
  };

  // const getCategory = async () => {
  //   const response = await instance.get(`/category`);

  //   console.log(response);
  //   setCategories(response.data);
  // };

  // const getUserById = async () => {
  //   const response = await instance.get(`/news/detail/${id}`);
  //   console.log(response);
  //   setTitle(response.data.title);
  //   setContent(response.data.content);
  //   setSummary(response.data.summary);
  //   setCategoryName(response.data.Category.name);
  //   setImage(response.data.image);
  // };

  // const data = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();

  //   formData.append("title", title);
  //   formData.append("content", content);
  //   formData.append("summary", summary);
  //   formData.append("image", image);
  //   formData.append("categoryId", categoryName);
  //   try {
  //     await instance.put(`/news/proceed/${id}`, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     navigate("/FormAdmin");
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <NavbarAdmin />
      <div className="container mt-3">
        <Link to={"/formadmin"}>
          <button type="button" className="btn btn-lg">
            <MdArrowBack />
          </button>
        </Link>
      </div>
      <div
        className="news-detail-background container px-5 py-4 rounded-4"
        style={{ backgroundColor: "#F9FBFF" }}>
        <h1 className="fw-bolder">{news.title}</h1>
        <h1 className="fw-bolder">{news.content}</h1>
        <h1 className="fw-bolder">{news.summary}</h1>
        <h1 className="fw-bolder">{news.Category.name}</h1>

        <img className=" mb-3 rounded-4 img-fluid" src={news.image} alt="" />
      </div>
        <button onClick={handlePublish} >publish</button>
      <Footer />
    </>
  );
};

export default PublishNews;
