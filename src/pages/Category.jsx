import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import { useParams } from "react-router-dom";
import React from "react";

const URL = "https://ayfnfebe29.up.railway.app/category"

function Category(){
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
            {news ? (
                <div className="card mb-3 mx-auto" key={news.id}>
                <div className="mx-auto row g-0" style={{width: "1200px"}}>
                <div className='col-md-4 mt-2 img-fluid rounded-start col-md-8 card-body card-title card-text' >
                    <CategoryCard
                        image={news.image}
                        title={news.title}
                        content={news.content}
                    />
                </div>
                </div>
                </div>
            ) : <h1>loading</h1>
            
            }
    
            <Footer/>
        </>
    )
}

export default Category