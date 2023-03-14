import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import instance from "../libs/axios";
import Navbar from "../components/Navbar";
import { MdArrowBack } from "react-icons/md";

const ProfileData = () => {
  const [user, setUser] = useState(null);
  const [countries, setCountries] = useState([]);

  const getUser = async () => {
    const response = await instance.get("/user");
    setUser(response.data);
  };
  console.log(user);

  const getCountry = async () => {
    const response = await instance.get("/country");
    setCountries(response.data);
  };

  const findCountryName = (countryId, countries) => {
    const country = countries.find((c) => c.id === countryId);
    return country ? country.name : "";
  };

  console.log(countries);

  useEffect(() => {
    getUser();
    getCountry();
  }, []);

  return (
    <div>
      <Navbar />
      {user && (
        <div
          className="news-detail-background container px-5 py-4 rounded-4 mt-5 col-6"
          style={{ backgroundColor: "#F9FBFF" }}>
          <div className="row d-flex justify-content-center text-center">
            <div className="col">
              <img
                src={user.data.UserDetail.image}
                alt=""
                style={{ width: 300 }}
                className="img-fluid mx-auto rounded-circle my-3"
              />
              <p>Email : {user.data.email}</p>
              <p>Full Name : {user.data.UserDetail.fullName}</p>
              <p>
                Country :{" "}
                {findCountryName(user.data.UserDetail.countryId, countries)}
              </p>
              <div  className="btn"  style={{ backgroundColor : "#0D6FFB" }}>
              <Link to={`/ProfileEdit`} style={{color: 'white', textDecoration : "none"}}>Edit</Link>
            </div>
            </div>
            
          </div>
          
        </div>
      )}
     
    </div>
  );
};

export default ProfileData;
