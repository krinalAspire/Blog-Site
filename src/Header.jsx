import React from "react";
import { NavLink, Route, Routes} from "react-router-dom";
import Blogpage from "./First Page/Blogpage";
import Login from "./First Page/Login";
import Register from "./First Page/Register";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(93, 63, 211)' }}>
                <div className="container-fluid py-2">
                    <NavLink className="navbar-brand text-white" to="/">Blog</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                 <NavLink to="/login" className="nav-link text-white"><span className="fa fa-sign-in me-2"></span>Login</NavLink>
                            </li>
                            <li className="nav-item">
                                 <NavLink to="/register" className="nav-link text-white" ><span className="fa fa-user-plus me-2"></span>Register</NavLink>
                            </li>
                        </ul>
                        
                        {/* <NavLink className="navbar-brand nav-link text-white mx-auto" to="/login"><span className="fa fa-sign-in me-2"></span>Login</NavLink> */}
                        
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Blogpage/>}/>
            </Routes>
        </>
    );
}

export default Header;