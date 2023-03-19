import logo from "../assets/logo_ayfn_nocolor.png";
import { Link } from "react-router-dom";
import { MdLogin, MdLogout, MdShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import instance from "../libs/axios";

const Logout = () => {
  localStorage.clear();
  location.href = "/";
};

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);

  const getCategory = async () => {
    const response = await instance.get("/category");
    setCategories(response.data);
  };

  const getCountry = async () => {
    const response = await instance.get("/country");
    setCountries(response.data);
  };

  useEffect(() => {
    getCountry();
    getCategory();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ padding: 15 }}>
        <div className="container">
          <span className="navbar-brand">
            <Link to={"/"}>
              <img src={logo} alt="" width="70" height="40" />
            </Link>
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ps-2">
              <li className="nav-item">
                <Link
                  to={"/news"}
                  style={{ color: "white", marginRight: "2rem" }}
                  className="nav-link "
                  aria-current="page">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/trending"}
                  style={{ color: "white", marginRight: "2rem" }}
                  className="nav-link"
                  aria-current="page">
                  Trending
                </Link>
              </li>

              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white", marginRight: "2rem" }}>
                  Category
                </span>

                <ul className="dropdown-menu">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        to={`/category/${category.id}`}
                        className="dropdown-item">
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white", marginRight: "2rem" }}>
                  Asean
                </span>

                <ul className="dropdown-menu ">
                  {countries.map((country) => (
                    <li key={country.id}>
                      <Link
                        to={`/country/${country.id}`}
                        className="dropdown-item">
                        {country.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item" style={{ marginRight: 50 }}>
                <Link
                  to={"/about"}
                  style={{ color: "white" }}
                  className="nav-link "
                  aria-current="page">
                  About Us
                </Link>
              </li>
            </ul>
            <ul className="nav pe-5 justify-content-start">
              <li className="nav-item ">
                {localStorage.getItem("token") ? (
                  <>
                    <Link
                      to={"/data"}
                      style={{ color: "white", display: "inline-block" }}
                      className="nav-link ">
                      Data
                    </Link>
                    <Link
                      to={"/profileData"}
                      style={{ color: "white", display: "inline-block" }}
                      className="nav-link ">
                      Profile
                    </Link>

                    <Link
                      style={{
                        color: "#0D6FFB",
                        paddingRight: 16,
                        paddingTop: 8,
                        paddingBottom: 8,
                        paddingLeft: 16,
                        background: "white",
                        borderRadius: 8,
                        display: "inline-block",
                      }}
                      className="nav-link  fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#logout">
                      Logout
                    </Link>
                    <div
                      className="modal fade"
                      id="logout"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex="-1"
                      aria-labelledby="logoutLabel"
                      aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="logoutLabel">
                              Confirm Logout
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            Are you sure you want to exit?
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal">
                              Cancelled
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={Logout}>
                              Confirmation
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Link to={"/login"} className="login  fw-bold">
                      Login
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
