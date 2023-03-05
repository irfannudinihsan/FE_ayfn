import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import News from './News'
import orang from "../assets/orang.png"
import peopleTalking from "../assets/people-talking.png"
import { useState } from 'react'

const Home = () => {
  const [news, setNews] = useState([]);

  // const updateNews = (n) => {
  //   setNews(n);
  // }


    return (
      <div>
          <Navbar setNews={setNews}/>
          <div className="container my-5 p-5 ">
            <div className="row d-flex flex-wrap-reverse">
              <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                <h1 className='fw-bold text-start' size={80} style={{color: "#0D6FFB"}}>ASEAN YOUTH FORUM NEWS</h1>
                <h4 className=' text-xl-start'>Valid News for youth in ASEAN</h4>
              </div>
              <div className="col-md-12 col-lg-6">
                <img src={peopleTalking}  className="img-fluid" width="570"/>
              </div>
            </div>
          </div>

            {/* <div className='container-fluid d-flex justify-content-center'>
              <img src={orang}  className=""/>
            </div> */}
          
           

          <News news={news}/>
          <Footer/>
      </div>
    )
  }
  
  export default Home