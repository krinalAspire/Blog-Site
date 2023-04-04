import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Userlist(){
    const[userData, userDatachange]=useState(null);

    const navigate = useNavigate();

    
    // useEffect(() => {
    //   let userData = localStorage.getItem('userData');
    //   if (userData === '' || userData === null) {
    //     navigate('/login');
    //   }
    // }, []);

    const LoadDetail = (_id) => {
        navigate('/user/view/' + _id)
      }
     
      useEffect(()=>{
        fetch("http://localhost:5000/users",{
          method:'GET'}).then(result=>result.json())
          .then(result=>userDatachange(result)) 
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
                <NavLink className="nav-link text-white" aria-current="page" to={'/home'}>Blog List</NavLink>
              </li>
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
        <div className="userlist container">
          <div className="text-white " >
            <div >
              <h2>User List</h2>
            </div>
            <div>
              
              <table className="table table-bordered text-white">
                <thead className="text-dark table-secondary">
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
                  {userData &&
                    userData.map(item => (
                      <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.country}</td>
                        <td>{item.address}</td>
                        <td>{item.gender}</td>
                        <td>
                          <a onClick={() => { LoadDetail(item._id) }} className="ms-2 ps-4 text-white" data-toggle="tooltip" data-placement="bottom" title="View" ><i className="fa fa-eye" aria-hidden="true"></i></a>
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