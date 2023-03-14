import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useState } from "react";
import instance from "../libs/axios";

const ProfileEdit = () => {
  const [image, setImage] = useState();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [fullName, setFullName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countries, setCountries] = useState([]);


  const getCountry = async () => {
    const response = await instance.get("/country");
    setCountries(response.data);
  };

  console.log(countryName)

  const getUser = async () => {
    const response = await instance.get("/user");
    console.log(response.data, "user");
    setEmail(response.data.data.email);
    setPassword(response.data.data.password)
    setFullName(response.data.data.UserDetail.fullName);
    setImage(response.data.data.UserDetail.image);
    setCountryName(response.data.data.UserDetail.Country.name);
  };

  useEffect(() => {
    getUser();
    getCountry();
  }, []);

  

  const updateProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", image);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("fullName", fullName);
    formData.append("countryId", countries);
    try {
      await instance.put("/user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
    } catch (error) {
      console.log(error.response);
    }
  };



  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row justify-content-center">
          <Link to={"/profileData"}>
            <button type="button" className="btn btn-lg">
              <MdArrowBack />
            </button>
          </Link>

          <div
            className="news-detail-background container px-5 py-4 rounded-4"
            style={{ backgroundColor: "#F9FBFF" }}>
            <form onSubmit={updateProfile} action="">
              <div className="field my-3">
                <label htmlFor="image">
                  <h5>Image</h5>
                  <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                    className="form-control border-0"
                    placeholder="Image Link"
                    required
                  />
                </label>
              </div>

              <div className="field my-3">
                <h5>Email</h5>
                <input
                  type="text"
                  className="input border-0 p-2 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field my-3">
                <h5>Password</h5>
                <input
                  type="text"
                  className="input border-0 p-2 "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="field my-3">
                <h5>Full Name</h5>
                <input
                  type="text"
                  className="input border-0 p-2 "
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="field my-3">
                <h5>Country</h5>
                <select
                className="form-select border-0"
                  name="countriesId"
                  id="countries"
                  onChange={(e) => setCountryName(e.target.value)}
                  required
                  >
                  {countries.map((item, id) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="mb-2 mt-4">
                <button type="submit" className="btn btn-success">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
