import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import { useParams } from "react-router-dom";
import React from "react";

const URL = "https://ayfnfebe29.up.railway.app/news/all/category/"

function Category(){
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
            <div className="card mb-3 mx-auto" >
            <div className="mx-auto row g-0">
            {news.map((category) => {
                return <div className='col-md-4 mt-2 img-fluid rounded-start col-md-8 card-body card-title card-text' key={category.id}>
                    <CategoryCard
                        id={category.id}
                        image={category.image}
                        title={category.title}
                        summary={category.summary}
                        categoryName={category.Category.name}
                        createdAt={category.createdAt}
                    />
                </div>
            })}
            </div>
            </div>
          <Footer/>
        </>
    )
}

export default Category