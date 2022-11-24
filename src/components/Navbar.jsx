import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";

const Navbar = ({id}) => {
    return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand ps-5">
                <img src={logo} alt="" width="60" height="30"/>
                <Link to={"/News"}></Link>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">              
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <Link to={"/trending"} style={{color: 'white', padding:"1rem"}} >Trending</Link>
                </li>

                <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Link to={"/category"} style={{color: 'white', padding:"1rem"}} >Category</Link>
                    </div>

                    <ul className="dropdown-menu">
                        <li><Link to={`economy/${id}`}><a className="dropdown-item">Economy</a></Link></li>
                        <li><a className="dropdown-item" href="#">Environment</a></li>
                        <li><a className="dropdown-item" href="#">Health</a></li>
                        <li><a className="dropdown-item" href="#">Politic</a></li>
                        <li><a className="dropdown-item" href="#">Other</a></li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Link to={"/asean"} style={{color: 'white', padding:"1rem"}} >Asean</Link>
                    </a>

                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Kamboja</a></li>
                        <li><a className="dropdown-item" href="#">Laos</a></li>
                        <li><a className="dropdown-item" href="#">Malaysia</a></li>
                        <li><a className="dropdown-item" href="#">Filipina</a></li>
                        <li><a className="dropdown-item" href="#">Thailand</a></li>
                        <li><a className="dropdown-item" href="#">Singapura</a></li>
                        <li><a className="dropdown-item" href="#">Vietnam</a></li>
                        <li><a className="dropdown-item" href="#">Myanmar</a></li>
                        <li><a className="dropdown-item" href="#">Indonesia</a></li>
                        <li><a className="dropdown-item" href="#">Brunei Darussalam</a></li>
                    </ul>
                </li>

                <li className="nav-item">
                <Link to={"/about"} style={{color: 'white', padding:"1rem"}} >About Us</Link>
                </li>
            </ul>
            
            <form className="d-flex" role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>         
        
            <ul className="nav ps-5 pe-5 justify-content-end">
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
        </div>           
       </nav>
</>
    )
  }
  
  export default Navbar