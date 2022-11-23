import  NewsCard  from '../components/NewsCard'
import axios from 'axios';
import { useState, useEffect } from 'react';

function News() {
    const [isLoading, setIsLoading] = useState(true);
    const [news, setNews] = useState([]);
    // const navigation = useNavigate();

    useEffect(() => {
        axios("https://6353739ca9f3f34c3752aeb7.mockapi.io/ayf/article").then((res) => {
          setNews(res.data);
          setIsLoading(false);
        });
      }, []);

      console.log(news);

return(
    <>
    <div className='container my-3'>
        <div className='row'>
            {news.map((article, id) => {
                return <div className='col-md-4 mt-2' key={id}>
                    <NewsCard
                        id={article.id}
                        image={article.image}
                        title={article.title}
                        content={article.content}
                    />
                </div>
            })}
        </div>
    </div>
    </>
)
}

export default News;