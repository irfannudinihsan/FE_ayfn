import { useState } from 'react'
import Footer from '../components/Footer'
import NavbarAdmin from '../components/NavbarAdmin'
import News from './News'

import NewsAdmin from './NewsAdmin'



const HomeAdmin = (props) => {
  const [news, setNews] = useState([]);

  const updateNews = (n) => {
    setNews(n);
  }
    return (
      <div>
        {console.log(news)}
          <NavbarAdmin  setNews={setNews}/>
          <NewsAdmin news={news}/>

          <Footer/>
      </div>
    )
  }
  
  export default HomeAdmin