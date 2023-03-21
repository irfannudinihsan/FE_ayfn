import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import peopleTalking from "../assets/people-talking.png";
import { useState } from "react";
import instance from "../libs/axios";
import { useEffect } from "react";
import News from "./News";
import logoNews from "../assets/News.png";
import logoCountry from "../assets/COUNTRY.png";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
const [isLoading, setIsLoading] = useState(true)
  const params = useParams();
  const { id } = params;


  const getCountry = async () => {
    const response = await instance.get("/country");
    setCountries(response.data);
  };
  const getCategory = async () => {
    const response = await instance.get("/category");
    setCategories(response.data);
  };
  const getNews = async () => {
    const response = await instance.get("/news/all");
    setNews(response.data);
  };

  useEffect(() => {
    setIsLoading(true)
    getCountry();
    getCategory();
    getNews();
    setIsLoading(false)
  }, []);


  if (isLoading) { 
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  

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
            <h5 className=" text-xl-start">
              A place to express the voices of Asean youth
            </h5>
          </div>
          <div className="col-md-12 col-lg-6">
            <img src={peopleTalking} className="img-fluid" width="600" />
          </div>
        </div>        
      </div>
      <div className="news-home">
        <div className="container">
      <div className="row  mx-auto my-3 p-3 rounded-4 my-5">
        {news.slice(0, 3).map((item, id) => (
          <div className="col-xl-4" key={id}>

            <div className="mt-5 card p-3 border-0 rounded-3">
            <img src={item.image} className="img-fluid rounded-3" alt="" />
            <div className="card-body mt-3" style={{ padding: 0 }}>
            <h5 className="card-title fw-bold">{item.title}</h5>
            <p className="card-text">{item.summary}</p>
            <h6 className="card-text primary" style={{ color: "blue" }}>
            {item.Category.name}
          </h6>
          <p>{format(parseISO(item.createdAt), "MM-dd-yyyy")}</p>
          <div className="btn " style={{ backgroundColor: "#0D6FFB" }}>
            <Link
              to={`/newsdetailhome/${item.id}`}
              style={{ color: "white", textDecoration: "none" }}>
              {" "}
              <span>detail</span>{" "}
            </Link>
          </div>
            </div>
           

            </div>
           
          </div>
        ))}
      </div>
      </div>
      </div>

      <div className="mt-5 p-5">
          <div className="row p-5 my-5">
            <div className="col text-center">
              <img src={logoCountry} alt="" className="my-2" />
              <h2>Country</h2>
              <h4>{countries.length}</h4>
            </div>

            <div className="col text-center">
              <img src={logoNews} alt="" className="my-2" />
              <h2> News</h2>
              <h4>{news.length}</h4>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Home;
