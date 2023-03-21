import React, { useEffect, useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import instance from "../libs/axios";

const UnPublishNews = () => {
  const [news, setNews] = useState("");
  const [isPublished, setIsPublished] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(isPublished);
  useEffect(() => {
    getNewsById();
  }, []);

  const getNewsById = async () => {
    const response = await instance.get(`/news/detail/${id}`);
    setNews(response.data);
    setIsPublished(response.data.isPublished);
    setIsLoading(false);
  };

  const handleUnPublish = async () => {
    try {
      await instance.put(`/news/unproceed/${id}`, {
        isPublished: false,
      });
      setIsPublished(!isPublished);
      navigate("/FormAdmin")
    } catch (error) {
      console.log(error.response);
    }
  };

  // const handleChecked = async () => {
  //   setIsPublished(!isPublished);
  // };

  // const data = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();

  //   formData.append("title", title);
  //   formData.append("content", content);
  //   formData.append("summary", summary);
  //   formData.append("image", image),
  //   formData.append("categoryId", categoryName);
  //   formData.append("isPublished", isPublished);

  //   try {
  //     await instance.put(`/news/unproceed/${id}`, formData, {
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
    <div>
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
      <button onClick={handleUnPublish} >unpublish</button>
    </div>
  );
};

export default UnPublishNews;
