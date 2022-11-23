import TrendingCard  from '../components/TrendingCard'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Trending() {
    const [article, setArticle] = useState(true);
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios("https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article").then((res) => {
          setNews(res.data);
          setArticle(false);
        });
      }, []);

      console.log(news);

return(
    <>
    <Navbar/>
    <div className="card mb-3" style={{maxwidth: 540}}>
        <div className="row g-0">
            {news.map((trending) => {
                return <div className='col-md-4 mt-2' key={trending.id}>
                    <TrendingCard
                        // id={trending.id}
                        image={trending.image}
                        title={trending.title}
                        content={trending.content}
                    />
                </div>
            })}
        </div>
    </div>
    </>
)
}

export default Trending;