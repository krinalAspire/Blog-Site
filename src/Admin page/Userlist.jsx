import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Userlist(){
    const[blogData, BlogDatachange]=useState(null);

    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate('/user/view/' + id)
      }
     
      useEffect(()=>{
        fetch("http://localhost:5000/users",{
          method:'GET'}).then(result=>result.json())
          .then(result=>BlogDatachange(result)) 
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
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(93, 63, 211)' }}>
        <div className="container-fluid py-2">
          <div className="navbar-brand text-white" to="/">Blog</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-white" aria-current="page" to={'/home'}>Blog List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/userlist">User List</NavLink>
              </li>
              <li>
                <NavLink className="nav-link text-white" to={'/login'} style={{ float: 'right' }}>Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div className="container">
          <div className="text-white " >
            <div >
              <h2>User List</h2>
            </div>
            <div>
              
              <table className="table table-bordered text-white">
                <thead className="text-white">
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Country</td>
                    <td>Address</td>
                    <td>Gender</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {blogData &&
                    blogData.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.country}</td>
                        <td>{item.address}</td>
                        <td>{item.gender}</td>
                        <td>
                          <a onClick={() => { LoadDetail(item.id) }} className="ms-2 ps-4 text-dark" data-toggle="tooltip" data-placement="bottom" title="View" ><i className="fa fa-eye" aria-hidden="true"></i></a>

                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}

export default Userlist;