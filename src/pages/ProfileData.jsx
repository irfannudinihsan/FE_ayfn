import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../libs/axios";
import Navbar from "../components/Navbar";



const ProfileData = () => {
  const [user, setUser] = useState(null);
  const [countries, setCountries] = useState([])


  const getUser = async () => {
    const response = await axios.get("/user");
    setUser(response.data);
  };
  console.log(user);


  const getCountry = async () => {
    const response = await axios.get("/country");
    setCountries(response.data)
  }


  const findCountryName = (countryId, countries) => {
    const country = countries.find((c) => c.id === countryId)
    return country ? country.name : "";
  }

  console.log(countries)

  useEffect(() => {
    getUser();
    getCountry();
  }, []);

  return <div>

    <Navbar/>

    {user && (
      <div className="news-detail-background container px-5 py-4 rounded-4"
      style={{ backgroundColor: "#F9FBFF" }}>


          <img src={user.data.UserDetail.Image} alt="" />
        <p>{user.data.email}</p>
        <p>{user.data.UserDetail.fullName}</p>
        <p>{findCountryName(user.data.UserDetail.countryId, countries)}</p>
      </div>
    )}
  </div>;
};

export default ProfileData;
