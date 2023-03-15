import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function User(){
    const {userid}=useParams();
    
    const[userdata, UserDatachange]=useState({});

    useEffect(()=>{
        fetch("http://localhost:5000/users/"+userid,{
          method:'GET'}).then(result=>result.json())
          .then(result=>UserDatachange(result)) 
        // }).then((resp)=>{
        //   console.log(resp)
        //   // toast.success('Success'); 
        // })
        .catch((err)=>{
          toast.error("Failed : " + err.message);
        })
    },[]);

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
        <div className="container-fluid py-2">
          <div className="navbar-brand text-white" to="/">Blog</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/userlist">User List</NavLink>
              </li>
              {/* <li>
                <NavLink className="nav-link text-white" to={'/login'} style={{ float: 'right' }}>Logout</NavLink>
              </li> */}
            </ul>
          </div>
          <span className="navbar-brand nav-link text-white fw-bold">Welcome Admin User</span>
          <NavLink to={'/login'} className="navbar-brand ms-3 nav-link text-white btn btn-outline-info p-1" ><span className="fa fa-sign-out me-2"></span>Logout</NavLink>
        </div>
      </nav>


      <div>
           <div className="card" style={{textAlign:"center"}}>
              <div className="card-title">
                <h1>User Details</h1>
              </div>
              <hr/>
              <div className="card-body"></div>
           
        { userdata &&
        <div>
        <h2>User Name Is : <b>{userdata.name}</b></h2>
        <h3 className="pt-2">Contact Details</h3>
        <h5>Email is : {userdata.email}</h5>
        <h5>Phone is : {userdata.phone}</h5>
        <h3 className="pt-2">Other Details</h3>
        <h5>Country is : {userdata.country}</h5>
        <h5>Address is : {userdata.address}</h5>
        <h5>Gender is : {userdata.gender}</h5>

        <br/>
        <Link to={'/userlist'} className="btn btn-primary">Back To UserList</Link>
        </div>
        }
        </div>
      </div>

        </>
    );
}

export default User;