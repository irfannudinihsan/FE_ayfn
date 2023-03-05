import NewsDetailCard from "../components/NewsDetailCard";
import Navbar from "../components/Navbar";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import BackComponent from "../components/BackComponent";

const URL = "https://ayfnfebe29.up.railway.app/news/detail/";

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
  //   console.log(news.User.UserDetail.fullName)

  return (
    <>
      <Navbar />
      <BackComponent />
      {news ? (
        <div className="container mt-3" key={news.id}>
          <NewsDetailCard
            title={news.title}
            countryName={news.Country.name}
            userDetailFullname={news.User.UserDetail.fullName}
            createdAt={news.createdAt}
            image={news.image}
            content={news.content}
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
