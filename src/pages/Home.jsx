import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import peopleTalking from "../assets/people-talking.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5 p-5 ">
        <div className="row d-flex flex-wrap-reverse">
          <div className="col-md-12 col-lg-6 d-flex flex-column justify-content-center">
            <h1
              className="fw-bold text-start"
              size={80}
              style={{ color: "#0D6FFB" }}>
              ASEAN YOUTH FORUM NEWS
            </h1>
            <h4 className=" text-xl-start">Valid News for youth in ASEAN</h4>
          </div>
          <div className="col-md-12 col-lg-6">
            <img src={peopleTalking} className="img-fluid" width="570" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
