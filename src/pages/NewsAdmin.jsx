import  NewsCard  from '../components/NewsCard'
import axios from 'axios';
import { useState, useEffect } from 'react';

function NewsAdmin({news}) {
    const [isLoading, setIsLoading] = useState(true);


return(
    <>
    <div className='container my-3'>
        <div className='row'>
            {news.map((article, id) => {
                return <div className='col-md-4 mt-2' >
                    <NewsCard
                        key={id}
                        id={article.id}
                        image={article.image}
                        title={article.title}
                        summary={article.summary}
                    />
                </div>
            })}
        </div>
    </div>
    </>
)
}

export default NewsAdmin;