import React from "react";
import { NavLink } from "react-router-dom";

function About(){
    return(
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
                        </ul>
                    </div>
                </div>
            </nav>
       <div className="text-white">About</div>
       </>
    );
}

export default About;