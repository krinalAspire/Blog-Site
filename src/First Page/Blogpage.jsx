import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";


function Blogpage() {
   
    return (
        <>
            <div >
                <div className="text-center">
                    <NavLink to="/login" className="btn btn-success text-white my-5"><span className="fa fa-sign-in me-2"></span>Login</NavLink>
                    <br/> <h4 className="text-white fw-bold mt-1">OR</h4>
                    <NavLink to="/register" className="btn btn-info text-white my-5 ms-3"><span className="fa fa-user-plus me-2"></span>Register</NavLink>
                </div>
            </div>
        </>
    );
}

export default Blogpage;