import NewsDetailCard from "../components/NewsDetailCard";
import Navbar from "../components/Navbar";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
const URL = "https://be30-production.up.railway.app/news/detail/";
import { MdArrowBack } from "react-icons/md";


function NewsDetail() {
  const params = useParams();
  const { id } = params;
  console.log(id);
  const [news, setNews] = useState();

  useEffect(() => {
    axios.get(URL + id).then((response) => {
      setNews(response.data);
    });
  }, []);

  console.log(news);
    // console.log(news.User.UserDetail.fullName)

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Link to={"/news"}>
          <button type="button" className="btn btn-lg">
            <MdArrowBack />
          </button>
        </Link>
      </div>
      {news ? (
        <div className="container mt-3" key={news.id}>
          <NewsDetailCard
            title={news.title}
            // countryName={news.Country.name}
            userDetailFullname={news.User.UserDetail.fullName}
            createdAt={news.createdAt}
            image={news.image}
            content={news.content}
            countryName={news.Country.name}
          />
        </div>
      ) : (
        <AiOutlineLoading3Quarters
          size={100}
          style={{ justifyContent: "center" }}
        />
      )}
    </>
  );
}

export default NewsDetail;
