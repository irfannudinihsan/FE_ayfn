import logo from "../assets/logo_ayfn_nocolor.png";
import { Link } from "react-router-dom";
import { MdLogin, MdLogout, MdShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";




const primary = "#0D6FFB"
const Logout = () => {
  localStorage.clear();
  location.href = "/";
};

const Navbar = ({ id, setNews }) => {
  const [keyword, setKeyword] = useState("");
  const [title, setTitle] = useState("");
  
//   const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ayfnfebe29.up.railway.app/news/search?title=${keyword}`)
      .then((res) => {
        setNews(res.data);
      });
  }, [title, keyword]);

  const searchByTitle = (e) => {
    e.preventDefault();
    setKeyword(title);
    axios
      .get(`https://ayfnfebe29.up.railway.app/news/search?title=${keyword}`)
      .then((res) => {
        setNews(res.data);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ padding: 15, background :  primary }} >
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
              <li className="nav-item" >
                <Link
                  to={"/trending"}
                  style={{ color: "white", marginRight: "2rem" }}
                  className="nav-link active"
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
                  {/* <Link to={"/category"} style={{color: 'white'}} >Category</Link> */}
                </span>

                <ul className="dropdown-menu">
                  <li>
                    <Link to={`category/${1}`}  className="dropdown-item">
                      Economy
                    </Link>
                  </li>
                  <li>
                    <Link to={`category/${2}`} className="dropdown-item">
                      Environment
                    </Link>
                  </li>
                  <li>
                    <Link to={`category/${3}`} className="dropdown-item">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link to={`category/${4}`} className="dropdown-item">
                      Politic
                    </Link>
                  </li>
                  <li>
                    <Link to={`category/${5}`} className="dropdown-item">
                      Other
                    </Link>
                  </li>
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
                  {/* <Link to={"/asean"} style={{color: 'white'}} >Asean</Link> */}
                </span>

                <ul className="dropdown-menu ">
                  <li>
                    <Link to={`country/${1}`} className="dropdown-item ">
                    Brunei Darussalam
                    </Link>
                  </li>
                  <li>
                    <Link to={`country/${2}`} className="dropdown-item">
                      Cambodia
                    </Link>
                  </li>
                  <li>
                    <Link to={`country/${3}`} className="dropdown-item">
                    Indonesia
                    </Link>
                  </li>
                  <li>
                    <Link to={`country/${4}`} className="dropdown-item">
                      Laos
                    </Link>
                  </li>
                  <li>
                    <Link to={`country/${5}`} className="dropdown-item">
                      Malaysia
                    </Link>
                  </li>
                  <li>
                    <Link to={`country/${6}`} className="dropdown-item">
                      Myanmar
                    </Link>
                  </li>
                  <li>
                    <Link to={`country/${7}`} className="dropdown-item">
                      Philippines
                    </Link>
                  </li>
                  <li>
                    <Link to={`country/${8}`} className="dropdown-item">
                      Singapore
                    </Link>
                  </li>
                  <li>
                    <Link to={`country/${9}`} className="dropdown-item">
                      Thailand
                    </Link>
                  </li>
                  <li>
                    <Link to={`country/${10}`} className="dropdown-item">
                      Vietnam
                    </Link>
                  </li>

                  {/* {countries.map((item, index) => {
                                        return <li><Link to={`country/${item.id}`}><span className="dropdown-item" >{item.name}</span></Link></li>
                                    })} */}
                </ul>
              </li>

              <li className="nav-item" style={{ marginRight: 50 }}>
                <Link
                  to={"/about"}
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page">
                  About Us
                </Link>
              </li>
            </ul>
            <form className="d-flex input-grup my-1" role="search" onSubmit={searchByTitle} style={{ marginRight: 50 }}>
              <input
                className="form-control  input"
                type="search"
                placeholder="Cari Judul"
                aria-label="Search"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
              />
              <button
                className="btn btn-light fw-bold"
                type="submit"
                style={{
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0, color : primary, 
                  }}
                onClick={searchByTitle}>
                Search
              </button>
            </form>

            <ul className="nav pe-5 justify-content-start">
              {/* <li className="nav-item">
                    <Link to={"/formdata"} style={{color: 'white', padding:"1rem"}} className="nav-link active" >Create Data</Link>
                </li> */}

              <li className="nav-item">
                {localStorage.getItem("token") ? (
                  <>
                    <ul className="nav justify-content-start">
                      <li className="nav-item nav-link active">
                        <Link
                          to={"/data"}
                          style={{ color: "white" }}
                          className="nav-link active">
                          <MdShoppingCart size={27} />
                          Data
                        </Link>
                      </li>

                      <button
                        className="btn nav-link text-white"
                        data-bs-toggle="modal"
                        data-bs-target="#logout">
                        Logout <MdLogout size={27} style={{ color: "white" }} />
                      </button>
                    </ul>
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
                    <Link
                      to={"/login"}
                      style={{
                        color: "#0D6FFB",
                        paddingRight: 16,
                        paddingTop: 8,
                        paddingBottom: 8,
                        paddingLeft: 16,
                        background: "white",
                        borderRadius: 8, 
                        
                      }}
                      className="nav-link active fw-bold">
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
