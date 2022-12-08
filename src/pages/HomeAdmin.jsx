import { useState } from 'react'
import Footer from '../components/Footer'
import NavbarAdmin from '../components/NavbarAdmin'
import News from './News'
import peopleTalking from '../assets/people-talking.png'
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

          <div className="container">
            <div className="row">
              <div className="col-4">
                <h1 className='fw-bold text-start' size={80} style={{color: "blue", marginTop:"8rem", size:"90"}}>ASEAN YOUTH FORUM NEWS</h1>
                <h3 className='fw-bold text-xl-start'>Valid News for youth in ASEAN</h3>
              </div>
              <div className="col-8 text-end">
                <img src={peopleTalking} width="570"/>
              </div>
            </div>
          </div>
          <NewsAdmin news={news}/>

          <Footer/>
      </div>
    )
  }
  
  export default HomeAdmin