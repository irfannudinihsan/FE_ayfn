import logo from "../logo.png";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand ps-5">
                <img src={logo} alt="" width="60" height="30"/>
                <Link to={"/News"}></Link>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                      
                      
            <ul className="navbar-nav mb-2 mb-lg-0 ms-5 ps-5">
                <li className="nav-item">
                    <Link to={"/trending"} style={{color: 'white', padding:"1rem"}} >Trending</Link>
                </li>

                <li className="nav-item">
                    <Link to={"/category"} style={{color: 'white', padding:"1rem"}} >Category</Link>
                </li>

                <li className="nav-item">
                    <Link to={"/asean"} style={{color: 'white', padding:"1rem"}} >Asean</Link>
                </li>

                <li className="nav-item">
                <Link to={"/about"} style={{color: 'white', padding:"1rem"}} >About Us</Link>
                </li>
            </ul>
            
            <form className="d-flex" role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>         
            
            <ul className="nav mb-2 mb-lg-0 me-5">
                {/* <li className="nav-item">
                <Link to={"/formdata"} style={{color: 'white', padding:"1rem"}} >Create Data</Link>
                </li> */}
                          
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