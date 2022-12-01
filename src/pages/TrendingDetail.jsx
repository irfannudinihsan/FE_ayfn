import TrendingDetailCard from "../components/TrendingDetailCard";
import Navbar from "../components/Navbar";
import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/Ai";
import {MdArrowBack} from "react-icons/md"
import { Link } from "react-router-dom";

const URL = "https://ayfnfebe29.up.railway.app/news/detail/"

function TrendingDetail () {
    const params = useParams();
    const {id} = params
    console.log(id)
    const [news, setNews] = useState();
    
    useEffect(() => {
    axios.get(URL+id).then((response) => {
      setNews(response.data);
    });
  }, []);

  console.log(news);


    return (
        <>
        <Navbar/>
        <div className="container mt-4">
        <Link to={"/trending"}>
            <button type="button" class="btn btn-primary"><MdArrowBack/>Back</button>
        </Link>
        </div>
        {
            news ? (
                <div className="container mt-3" key={news.id}>
                <div className="berita-body container mx-5 mt-4">
                    <TrendingDetailCard
                        title={news.title}
                        createdAt={news.createdAt}
                        countryName={news.Country.name}
                        userDetailFullname={news.User.UserDetail.fullName}
                        image={news.image}
                        content={news.content}
                    />
                </div>
            </div>
            ) : <AiOutlineLoading3Quarters size={100} style={{justifyContent: "center" }}/>
        
        }
        </>
    )
}

export default TrendingDetail;