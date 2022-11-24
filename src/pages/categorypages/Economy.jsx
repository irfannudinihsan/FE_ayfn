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
    const [article, setArticle] = useState(true);
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios("https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article/").then((res) => {
          setNews(res.data);
          setArticle(false);
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