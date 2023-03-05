import logo from "../assets/logo_ayfn_nocolor.png";
import { Link } from "react-router-dom";
import { MdLogin, MdLogout } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

const Logout = () => {
    localStorage.clear();
    location.href = '/';
}

const NavbarAdmin = ({setNews, ...rest}) => {
    const [keyword, setKeyword] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        axios.get(`https://ayfnfebe29.up.railway.app/news/search?title=${keyword}`).then((res) => {
            setNews(res.data)
        })
    }, [title, keyword]);

    const searchByTitle = (e) => {
        e.preventDefault();
        setKeyword(title);
        axios.get(`https://ayfnfebe29.up.railway.app/news/search?title=${keyword}`).then((res) => {
            setNews(res.data)
        })
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <span className="navbar-brand ps-5">
                        <Link to={"/homeadmin"}>
                            <img src={logo} alt="" width="70" height="40" />
                        </Link>
                    </span>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to={"/category"} style={{ color: 'white', marginRight: "2rem" }} className="nav-link active">Category</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/country"} style={{ color: 'white', marginRight: "2rem" }} className="nav-link active">Asean</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/formadmin"} style={{ color: 'white', marginRight: "2rem" }} className="nav-link active">Dashboard</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav pe-5 justify-content-end">
                            <form className="d-flex" role="search" onSubmit={searchByTitle}>
                                <input className="form-control me-2" onChange={(e) => setTitle(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-secondary bg-primary" type="submit" style={{ color: 'white' }}>Search</button>
                            </form>
                            <li className="nav-item">
                                {
                                    localStorage.getItem('token')
                                        ?
                                        <>
                                            <button className="btn nav-link text-white" data-bs-toggle="modal" data-bs-target="#logout">
                                                Logout <MdLogout size={27} style={{ color: 'white' }} />
                                            </button>

                                            <div className="modal fade" id="logout" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="logoutLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="logoutLabel">Confirm Logout</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            Are you sure you want to exit?
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelled</button>
                                                            <button type="button" className="btn btn-primary" onClick={Logout}>Confirmation</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                        :
                                        <>
                                            <Link to={"/login"} style={{ color: 'white' }} className="nav-link active">Login
                                                <MdLogin size={27} style={{ color: 'white', marginRight: "1rem" }} />
                                            </Link>
                                        </>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarAdmin