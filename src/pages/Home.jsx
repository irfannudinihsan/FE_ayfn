import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import News from './News'
import orang from "../assets/orang.png"

const Home = () => {
    return (
      <div>
          <Navbar />
            <div className='container-fluid d-flex justify-content-center'>
              <img src={orang}  className=""/>
            </div>
          
          <News/>
          <Footer/>
      </div>
    )
  }
  
  export default Home