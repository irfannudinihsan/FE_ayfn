import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";

const Navbar = ({id}) => {
    return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand ps-5">
                <Link to={"/"}>
                    <img src={logo} alt="" width="70" height="40"/>
                </Link>
            </a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto ps-5">
                    <li className="nav-item">
                        <Link to={"/trending"} style={{color: 'white', marginRight:"2rem"}} className="nav-link active" aria-current="page">Trending</Link>
                    </li>
        
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white', marginRight:"2rem"}}>Category
                        {/* <Link to={"/category"} style={{color: 'white'}} >Category</Link> */}
                        </a>
                
                    <ul className="dropdown-menu">
                        <li><Link to={`category/${1}` }><a className="dropdown-item">Economy</a></Link></li>
                        <li><Link to={`category/${2}`}><a className="dropdown-item">Environment</a></Link></li>
                        <li><Link to={`category/${3}`}><a className="dropdown-item">Health</a></Link></li>
                        <li><Link to={`category/${4}`}><a className="dropdown-item">Politic</a></Link></li>
                        <li><Link to={`category/${5}`}><a className="dropdown-item">Other</a></Link></li>
                        </ul>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: 'white', marginRight:"2rem"}}>Asean
                        {/* <Link to={"/asean"} style={{color: 'white'}} >Asean</Link> */}
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
                        <Link to={"/about"} style={{color: 'white'}} className="nav-link active" aria-current="page">About Us</Link>
                    </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
            

            <ul className="nav ps-5 pe-5 justify-content-end">
                {/* <li className="nav-item">
                    <Link to={"/formdata"} style={{color: 'white', padding:"1rem"}} className="nav-link active" >Create Data</Link>
                </li> */}
                          
                <li className="nav-item">
                    <Link to={"/login"} style={{color: 'white'}} className="nav-link active">Login
                        <MdLogin size={27} style={{color: 'white', marginRight:"1rem"}}/>
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