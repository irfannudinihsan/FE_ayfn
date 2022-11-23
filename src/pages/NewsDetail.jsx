import NewsDetailCard from "../components/NewsDetailCard";
import Navbar from "../components/Navbar";
import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const URL = "https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article/"

function NewsDetail () {
    // const [articleId, setarticleId] = useState(true);
    const params = useParams();
    const {id} = params
    console.log(id)
    const [news, setNews] = useState();
    // const [detail, setDetail] = useState([]);
    
    useEffect(() => {
    axios.get(URL+id).then((response) => {
      setNews(response.data);
    });
  }, []);

  console.log(news);

//   useEffect(() => {
//     axios.get(URL).then((response) => {
//       setDetail(response.data);
//     });
//   }, []);

    return (
        <>
        <Navbar/>
        {
            news ? (
                <div className="container mt-3" key={news.id}>
                <div className="berita-body container mx-5 mt-4">
                    <NewsDetailCard
                        title={news.title}
                        name={news.name}
                        createdAt={news.createdAt}
                        image={news.image}
                        content={news.content}
                    />
                </div>
            </div>
            ) : <h1>loading</h1>
        
        }
        </>
    )
}

export default NewsDetail;