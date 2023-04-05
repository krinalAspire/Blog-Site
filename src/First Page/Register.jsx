import { Link } from "react-router-dom";
import React, { useState } from "react";
import {NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Register() {
    const [userid, idChange] = useState("");
    const [name, nameChange] = useState("");
    const [password, passwordChange] = useState("");
    const [email, emailChange] = useState("");
    const [phone, phoneChange] = useState("");
    const [country, countryChange] = useState("india");
    const [address, addressChange] = useState("");
    const [gender, genderChange] = useState("");
   
    const navigate=useNavigate();

    const IsValidate=()=>{
        let isproceed=true;
        let errormessage='Please enter the value in ';
        if(userid===null || userid===''){
            isproceed=false;
            errormessage += ' Username';
        }
        if(name===null || name===''){
            isproceed=false;
            errormessage += ' Fullname';
        }
        if(password===null || password===''){
            isproceed=false;
            errormessage += ' Password';
        }
        if(email===null || email===''){
            isproceed=false;
            errormessage += ' Email';
        }
        if(!isproceed){
            toast.warning(errormessage)
        } else {
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
                
            }else{
                isproceed=false;
                toast.warning('Please enter the valid email')
            }
        }
        if(!isproceed){
            toast.warning(errormessage)
        } else {
            if(/^\d{10}$/.test(phone)){

            }else {
                isproceed=false;
                toast.warning("please enter the valid phone number")
            }
        }
        return isproceed;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let regobj={userid,name,password,email,phone,country,address,gender};
        if(IsValidate()){
        // console.log(regobj);
        fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res)=>{
            toast.success("Registered success.")
            navigate("/login");
        }).catch((err)=>{
            toast.error("Failed:"+err.message)
        });
    }
    }

    return (
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
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <div className="register offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-header">
                                <h1>User Registration</h1>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="m-2 form-group">
                                            <label>User Name<span className="text-danger">*</span></label>
                                            <input value={userid} name="userid" onChange={e=>idChange(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="m-2 form-group">
                                            <label>Password<span className="text-danger">*</span></label>
                                            <input value={password} name="password" onChange={e=>passwordChange(e.target.value)}  type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="m-2 form-group">
                                            <label>Full Name<span className="text-danger">*</span></label>
                                            <input value={name} name="name" onChange={e=>nameChange(e.target.value)}  className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="m-2 form-group">
                                            <label>Email<span className="text-danger">*</span></label>
                                            <input value={email} name="email" onChange={e=>emailChange(e.target.value)}  className="form-control" placeholder="johndue@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="m-2 form-group">
                                            <label>Phone<span className="text-danger">*</span></label>
                                            <input value={phone} name="phone" onChange={e=>phoneChange(e.target.value)}  className="form-control" placeholder="0123456789" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="m-2 form-group">
                                            <label>Country<span className="text-danger">*</span></label>
                                            <select value={country} name="country" onChange={e=>countryChange(e.target.value)}  className="form-control">
                                                <option value="india">India</option>
                                                <option value="usa">USA</option>
                                                <option value="singapore">Singapore</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="m-2 form-group">
                                            <label>Address</label>
                                            <textarea value={address} name="address" onChange={e=>addressChange(e.target.value)}  className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="m-2 form-group">
                                            <label>Gender</label>
                                            <br></br>
                                            <div>
                                            <input type="radio" checked={gender==="male"} onChange={e=>genderChange(e.target.value)}  name="gender" value="male" className=" form-check-input" />
                                            <label className="me-3 form-check-label">Male</label>
                                            <input type="radio" checked={gender==="female"} onChange={e=>genderChange(e.target.value)}  name="gender" value="female" className="form-check-input" />
                                            <label className="form-check-label">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="me-3 btn btn-primary">Register</button> 
                                <Link to={"/"} className="btn btn-danger">Back</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;