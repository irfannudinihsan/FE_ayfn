import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AseanCard from '../components/AseanCard';
import { useParams } from "react-router-dom";
import React from "react";

const URL = "https://ayfnfebe29.up.railway.app/news/all/country/"

function Asean(){
    const params = useParams();
    const {id} = params
    console.log(id)
    const [isLoading, setIsLoading] = useState(true);
    const [news, setNews] = useState([]);
  
        
    useEffect(() => {
        axios.get(URL+id).then((response) => {
          setNews(response.data);
          setIsLoading(false);
        });
      }, []);

      console.log(news);
    
    return(
        <>
            <Navbar/>
            <div className="container" >
            {news.map((asean) => {
                return <div className='' key={asean.id}>
                    <AseanCard
                        id={asean.id}
                        image={asean.image}
                        title={asean.title}
                        summary={asean.summary}
                        categoryName={asean.Category.name}
                        createdAt={asean.createdAt}
                    />
                </div>
            })}
            
            </div>
          <Footer/>
        </>
    )
}

export default Asean