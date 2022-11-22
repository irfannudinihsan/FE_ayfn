import logo from "../logo.png";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-primary">
                  <div className="container-fluid">
                      <a className="navbar-brand">
                          <img src={logo} alt="" width="60" height="30"/>
                          <Link to={"/News"}></Link>
                      </a>
                      <h3 className="nav justify-item-center text-light">AYF</h3>
                     
                          <ul className="nav justify-content-end">
                              <li className="nav-item">
                                  <Link to={"/formdata"} style={{color: 'white', padding:"1rem"}} >Create Data</Link>
                              </li>
                          
                              <li className="nav-item">
                                  <Link to={"/login"} style={{color: 'white'}}>Login
                                  <MdLogin size={30} style={{color: 'white', marginRight:"1rem"}}/>
                                  </Link>
                              </li>                           
                          </ul>                       
                  </div>
                  
              </nav>
    )
  }
  
  export default Navbar