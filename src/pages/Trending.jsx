import TrendingCard from "../components/TrendingCard";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Trending() {
  const [article, setArticle] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios("https://ayfnfebe29.up.railway.app/news/all").then((res) => {
      console.log(res);
      setNews(res.data);
      setArticle(false);
    });
  }, []);

  console.log(news);

  return (
    <>
      <Navbar />
      <div className="container">
        {news.map((news, id) => {
          return (
            <div
              className=""
              key={news.id}>
              <TrendingCard
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

      <Footer />
    </>
  );
}

export default Trending;
