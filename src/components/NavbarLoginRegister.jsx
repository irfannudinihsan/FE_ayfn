import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_ayfn_nocolor.png";



const NavbarLoginRegister = () => {
  return (
    <div>
      <nav className="navbar p-3" style={{ backgroundColor : "#0D6FFB" }}>
        <div className="container justify-content-center">
            <Link to={"/"} className="navbar-brand">
              <img src={logo} alt="" width="70" height="40" />
            </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarLoginRegister;
