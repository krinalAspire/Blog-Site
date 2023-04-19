import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function UserEdit() {
    const { _id } = useParams();

    const navigate = useNavigate();

    const User=JSON.parse(localStorage.getItem("userData"));
    const adminId=User.data.userid

    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [country, countrychange] = useState("india");
    const [address, addresschange] = useState("");
    const [role, rolechange]=useState("admin");

//   useEffect(() => {
//     fetch("http://localhost:5000/users/" + _id).then((res) => {
//         return res.json();
//     }).then((resp) => {
//         namechange(resp.name);
//         emailchange(resp.email);
//         phonechange(resp.phone);
//         countrychange(resp.country);
//         addresschange(resp.address);
//         rolechange(resp.role);
//     }).catch((err) => {
//         toast.error("Failed :" + err.message);
//     })
// }, []);

useEffect(()=>{
  axios.get("http://localhost:5000/users/"+_id)
  .then((res)=>{
     namechange(res.data.name);
     emailchange(res.data.email);
     phonechange(res.data.phone);
     countrychange(res.data.country);
     addresschange(res.data.address);
     rolechange(res.data.role);
  })
  .catch((err)=>{
    toast.error("Failed :" + err.message);
  })
},[]);

// const handlesubmit = (e) => {
//   e.preventDefault();
//   const bdata = { name, email, phone, country, address , role };

//   fetch("http://localhost:5000/users/"+_id, {
//       method: 'PATCH',
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(bdata)
//   }).then((res) => {
//       toast.success('Saved successfully');
//       navigate('/userlist');
//   }).catch((err) => {
//       toast.error("Failed:" + err.message);
//   })
// }

const handlesubmit=async(e)=>{
  e.preventDefault();
  const bdata = { name, email, phone, country, address , role };
  try{
    const res=await axios.patch("http://localhost:5000/users/"+_id, bdata)
    console.log(res);
    toast.success('Saved successfully');
    navigate('/userlist');
  }catch(err){
    toast.error("Failed:" + err.message);
  }
}

  return (
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
                <NavLink className="nav-link text-white" aria-current="page" to={'/home'}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/about">About</NavLink>
              </li>
              {/* <li>
                                <NavLink className="nav-link text-white" to={'/login'} style={{ float: 'right' }}>Logout</NavLink>
                            </li> */}
            </ul>
          </div>
          <span className="navbar-brand nav-link text-white fw-bold">Welcome Admin:- {adminId}</span>
          <NavLink to={'/login'} className="navbar-brand ms-3 nav-link text-white btn btn-outline-info p-1" ><span className="fa fa-sign-out me-2"></span>Logout</NavLink>
        </div>
      </nav>


      <div className="row">
        <div className="useredit offset-lg-3 col-lg-6">
          <form className="container text-white" onSubmit={handlesubmit}>
            <div>
              <h2>User Edit</h2>
            </div>
            <div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Name</label>
                    <input value={name} onChange={e =>namechange(e.target.value)}className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input value={email} onChange={e => emailchange(e.target.value)} className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Phone</label>
                    <textarea value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Country</label>
                    <select value={country} onChange={e => countrychange(e.target.value)} className="form-control">
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                      <option value="singapore">Singapore</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <input value={address} onChange={e => addresschange(e.target.value)} className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Role</label>
                    <select value={role} onChange={e => rolechange(e.target.value)} className="form-control">
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12 mt-2">
                  <div className="form-group">
                    <button type="submit" className="btn btn-success">Save</button> |
                    <Link to={'/userlist '} className="btn btn-danger">Back</Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserEdit;