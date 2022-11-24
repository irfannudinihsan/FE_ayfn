import axios from 'axios';
import { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import EconomyCard from '../../components/category/EconomyCard';
import { useParams } from "react-router-dom";

function Economy(){
    const params = useParams();
    const {id} = params
    console.log(id)
    const [news, setNews] = useState([]);
  
        
    useEffect(() => {
        axios("https://ayfnapi-be30.up.railway.app/news/all/trend").then((res) => {
        console.log(res)  
        setNews(res.data);
        });
      }, []);

      console.log(news);
    
    return(
        <>
            {/* <Navbar/> */}
            {news ? (
                <div className="card mb-3 mx-auto" >
                <div className="mx-auto row g-0" style={{width: "1200px"}}>
                <div className='col-md-4 mt-2 img-fluid rounded-start col-md-8 card-body card-title card-text' key={news.id}>
                    <EconomyCard
                        image={news.image}
                        title={news.title}
                        content={news.content}
                    />
                </div>
                </div>
                </div>
            ) : <h1>loading</h1>
            
        }
    
            {/* <Footer/> */}
        </>
    )
}

export default Economy