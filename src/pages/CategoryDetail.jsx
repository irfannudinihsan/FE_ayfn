import CategoryDetailCard from "../components/CategoryDetailCard";
import Navbar from "../components/Navbar";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
// import BackComponent from "../components/BackComponent";

const URL = "https://ayfnfebe29.up.railway.app/news/detail/";

function CategoryDetail() {
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

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Link to={`/`}>
          <button type="button" className="btn btn-lg">
            <MdArrowBack />
          </button>
        </Link>
      </div>
      {news ? (
        <div className="container mt-3" key={news.id}>
          <div className="berita-body container mx-5 mt-4">
            <CategoryDetailCard
              title={news.title}
              createdAt={news.createdAt}
              countryName={news.Country.name}
              userDetailFullname={news.User.UserDetail.fullName}
              image={news.image}
              content={news.content}
            />
          </div>
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

export default CategoryDetail;
