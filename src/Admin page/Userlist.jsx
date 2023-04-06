import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Userlist(){
    const[userData, userDatachange]=useState(null);

    const navigate = useNavigate();

    const User=JSON.parse(localStorage.getItem("userData"));
    const adminId=User.data.userid
    // console.log(adminId);

    // useEffect(() => {
    //   let userData = localStorage.getItem('userData');
    //   if (userData === '' || userData === null) {
    //     navigate('/login');
    //   }
    // }, []);

    const LoadEdit = (_id) => {
      navigate('/user/edit/' + _id)
    }

    const LoadDetail = (_id) => {
        navigate('/user/view/' + _id)
      }

    
  const Removefunction = (_id) => {
    if (window.confirm('are you sure you want to remove ?')) {
      fetch("http://localhost:5000/users/" + _id, {
        method: 'DELETE'
      }).then((res) => {
        toast.success('Removed successfully');
        window.location.reload();
      }).catch((err) => {
        toast.error("Failed:" + err.message);
      })
    }
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
          <span className="navbar-brand nav-link text-white fw-bold">Welcome Admin :- {adminId}</span>
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
                    <td>Role</td>
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
                        <td>{item.role}</td>
                        <td>
                        <a onClick={() => { LoadDetail(item._id) }} className="pe-3 ps-2 text-white" data-toggle="tooltip" data-placement="bottom" title="View" ><i className="fa fa-eye" aria-hidden="true"></i></a>
                          <a onClick={() => { LoadEdit(item._id) }} className="pe-3 text-white" data-toggle="tooltip" data-placement="bottom" title="Edit"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                          <a onClick={() => { Removefunction(item._id) }} className="pe-3 text-white" data-toggle="tooltip" data-placement="bottom" title="Delete"><i className="fa fa-trash" aria-hidden="true"></i></a>
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