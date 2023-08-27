import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";
import axios from "axios";
import { useState, useEffect } from "react";

function News() {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios("http://be.aseanyouthforumnews.my.id/news/all").then((res) => {
      setNews(res.data);
      setIsLoading(false);
    });
  }, []);

  const searchByTitle = (e) => {
    e.preventDefault();
    setKeyword(title);
    axios
      .get(`http://be.aseanyouthforumnews.my.id/news/search?title=${keyword}`)
      .then((res) => {
        setNews(res.data);
      });
  };
  console.log(news);

  return (
    <>
      <Navbar />
      <div className="container mt-5 ">
        <form
          className="d-flex input-grup col-xl-4 col-md-6 col-sm-3"
          role="search"
          onSubmit={searchByTitle}
          style={{ marginRight: 50 }}>
          <input
            className="form-control  input"
            type="search"
            placeholder="Cari Judul"
            aria-label="Search"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
          />
          <button
            className="btn bg-gradient btn-block text-light"
            type="submit"
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              background: "#0D6FFB",
            }}
            onClick={searchByTitle}>
            Search
          </button>
        </form>

        <div className="row ">
          {news.map((news, id) => {
            return (
              <div className=" col-xl-4 col-md-6 col-sm-10 mx-auto" key={id}>
                <NewsCard
                  id={news.id}
                  image={news.image}
                  title={news.title}
                  summary={news.summary}
                  CategoryName={news.Category.name}
                  createdAt={news.createdAt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default News;
