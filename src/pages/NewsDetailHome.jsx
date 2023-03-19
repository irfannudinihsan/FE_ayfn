import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import instance from "../libs/axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { format, parseISO } from "date-fns";
import { MdArrowBack } from "react-icons/md";
import {MdOutlineThumbUp } from "react-icons/md";
import { Link } from "react-router-dom";


function NewsDetailHome() {
  const [news, setNews] = useState("");
  const [totalLike, setTotalLike] = useState(0);
  const [likeCliked, setLikeCliked] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // add a loading state
  const { id } = useParams();

  console.log(news);
  console.log(totalLike);

  const getNews = async () => {
    const response = await instance.get(`/news/detail/${id}`);
    setNews(response.data);
    setTotalLike(response.data.total_like);
    setIsLoading(false); 
  };

  const addLike = async () => {
    if (!likeCliked) {
      try {
        await instance.put(`/news/like/${id}`, { totalLike });
      } catch (error) {
        console.log(error.response);
      }

      setTotalLike(totalLike + 1);
      setLikeCliked(true);
    } else {
      try {
        await instance.put(`/news/like/${id}`, { totalLike });
      } catch (error) {
        console.log(error.response);
      }

      setTotalLike(totalLike - 1);
      setLikeCliked(true);
    }
  };

  useEffect(() => {
    getNews();
  }, []);


  const isLoggedIn = localStorage.getItem("token");

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
      <Navbar />
      <div className="container mt-3">
        <Link to={"/"}>
          <button type="button" className="btn btn-lg">
            <MdArrowBack />
          </button>
        </Link>
      </div>
      <div
        className="news-detail-background container px-5 py-4 rounded-4"
        style={{ backgroundColor: "#F9FBFF" }}>
        <h1 className="fw-bolder">{news.title}</h1>

        <p className="">
        {format(parseISO(news.createdAt), "MM-dd-yyyy")}
        </p>
        <img className=" mb-3 rounded-4 img-fluid" src={news.image} alt="" />
        <h5 className="fw-light">
          {news.User.UserDetail.fullName}, {news.Country.name}
        </h5>
        <p className=" col-sm-9 ">{news.content}</p>

        <p>like : {news.total_like}</p>


        {isLoggedIn ? (
          <button className="btn btn-primary" onClick={addLike}  >
            {likeCliked} 
           <MdOutlineThumbUp />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default NewsDetailHome;