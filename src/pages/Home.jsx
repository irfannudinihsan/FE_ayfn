import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import News from './News'
import orang from "../assets/orang.png"
import { useState } from 'react'

const Home = () => {
  const [news, setNews] = useState([]);

  const updateNews = (n) => {
    setNews(n);
  }
    return (
      <div>
          <Navbar setNews={setNews}/>
            <div className='container-fluid d-flex justify-content-center'>
              <img src={orang}  className=""/>
            </div>
          
          <News news={news}/>
          <Footer/>
      </div>
    )
  }
  
  export default Home