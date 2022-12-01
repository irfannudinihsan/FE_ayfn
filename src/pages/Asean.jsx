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
    const [news, setNews] = useState([]);
  
        
    useEffect(() => {
        axios.get(URL+id).then((response) => {
          setNews(response.data);
        });
      }, []);

      console.log(news);
    
    return(
        <>
            <Navbar/>
            <div className="card mb-3 mx-auto" >
                <div className="mx-auto row g-0">
                {news.map((article, id) =>{
                    return <div className='col-md-4 mt-2 img-fluid rounded-start col-md-8 card-body card-title card-text' key={id} >
                    <AseanCard
                        id={article.id}
                        image={article.image}
                        title={article.title}
                        content={article.content}
                    />
                </div>
                }
                )}
                
                </div>
                </div>   
            <Footer/>
        </>
    )
}

export default Asean