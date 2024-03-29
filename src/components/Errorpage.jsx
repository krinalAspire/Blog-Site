import React from "react";
import { NavLink } from "react-router-dom";

function Errorpage(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
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
                            {/* <li className="nav-item">
                                 <NavLink to="/register" className="nav-link text-white" ><span className="fa fa-user-plus me-2"></span>Register</NavLink>
                            </li> */}
                        </ul>
                    </div>
                    {/* <NavLink to="/login" className="navbar-brand mx-auto nav-link text-white btn btn-outline-success p-1"><span className="fa fa-sign-in me-2"></span>Login</NavLink> */}
                    <NavLink to="/register" className="navbar-brand ms-3 nav-link text-white btn btn-outline-info p-1" ><span className="fa fa-user-plus me-2"></span>Register</NavLink>
                </div>
            </nav>
        

            <div>
           <div className="error card">
              <div className="card-title">
                <h1>Oops !!</h1>
                <hr/>
              </div>

              <div className="card-body">
                  <h4>User Not Found</h4>
              </div>
                </div>
      </div>

        </>
    );
}

export default Errorpage;
