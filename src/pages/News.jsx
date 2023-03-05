import NewsCard from "../components/NewsCard";
import axios from "axios";
import { useState, useEffect } from "react";

function News({ news }) {
  // const [isLoading, setIsLoading] = useState(true);
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //     axios("https://ayfnfebe29.up.railway.app/news/all").then((res) => {
  //       setNews(res.data);
  //       setIsLoading(false);
  //     });
  //   }, []);

  //   console.log(news);

  return (
    <>
      <div className="container-fluid  p-5" style={{ background: "#ECF2FF" }}>

        <h1 className="text-center fw-bold">News</h1>

        <div className="row ">
          {news.map((article, id) => {
            return (
              <div className=" col-xl-4 col-md-4 col-sm-12 mx-auto" key={id}>
                <NewsCard
                  // key={id}
                  id={article.id}
                  image={article.image}
                  title={article.title}
                  summary={article.summary}
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
