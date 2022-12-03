import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import News from './News'
import orang from "../assets/orang.png"

const Home = () => {
    return (
      <div>
          <Navbar />
          
            <img src={orang}  className="img-fluid"/>
          
          <News/>
          <Footer/>
      </div>
    )
  }
  
  export default Home