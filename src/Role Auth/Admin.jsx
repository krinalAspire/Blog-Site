import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Admin(){
    const[displaysername,displayusernameUpdate]=useState('');
    const[showmenu, showmenuUpdate]=useState(false);
    const usenavigate=useNavigate();
    const location=useLocation();
    useEffect(()=>{
        if(location.pathname==='/login' || location.pathname==='/register'){
            showmenuUpdate(false);
        } else {
            showmenuUpdate(true);
            let username=sessionStorage.getItem('username');
        if(username==='' || username===null){
            usenavigate('/login');
        }else{
            displayusernameUpdate(username);
        }
        }
        
    },[location])

    return(
       <>
       <div>
        {showmenu &&
       <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(93, 63, 211)' }}>
                <div className="container-fluid py-2">
                    <div className="navbar-brand text-white" to="/">Blog</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" aria-current="page" to={'/home'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link text-white" to={'/customer'}>Customer</NavLink>
                            </li>
                            <li>
                                <span style={{marginLeft:'70%'}}>Welcome<b>{displaysername}</b></span>
                            </li>
                            <li>
                              <NavLink className="nav-link text-white" to={'/login'} style={{float: 'right'}}>Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
}
            </div>
       </>
    );
}

export default Admin;