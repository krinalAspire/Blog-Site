import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function ForgotPassword() {
    const{id,token}=useParams();

    const[password,setpassword]=useState('');

    const[message,setMessage]=useState('');

    const navigate=useNavigate();

    const uservalid=async()=>{
        const res=await fetch(`http://localhost:5000/forgotpassword/${id}/${token}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });

        const data=await res.json();
        // console.log(data)

        if(data.status===201){
            console.log("user valid")
        } else{
            navigate("*")
        }
    }

    const sendPassword=async(e)=>{
        e.preventDefault();

        const res=await fetch(`http://localhost:5000/${id}/${token}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({password})
        });

        const data=await res.json();
        // console.log(data)

        if(data.status===201){
            setpassword("")
            setMessage(true)
        } else{
            toast.error("Token Expired !! Generate New Link");
        }
    }

    useEffect(()=>{
        uservalid();
    },[])

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
                <section className="container">
                    <br></br>
                    <div className="login row content d-flex justify-content-center mt-5">
                        <div className="col-md-5">
                            <div className="box shadow bg-white p-4">
                                <h5 className="mb-4 text-center fs-1">Enter New Password</h5>

                                {message ? <p style={{color:"green", fontWeight:"bold"}}>New Password Sent Succesfully!!</p>:""}

                                <form className="mb-3" onSubmit={sendPassword}>
                                    <div className="form-floating mb-3">
                                        <input type="password" name="password" value={password} onChange={e=>setpassword(e.target.value)} className="form-control rounded-0" id="floatingInput" placeholder="Enter Your New Password" />
                                        <label htmlFor="floatngInput">New Password<span className="text-danger">*</span></label>
                                    </div>

                                    <div className="d-grid gap-2 mb-3">
                                        <button type="submit" className="btn btn-dark btn-lg border-0 rounded-0">Send</button>
                                        {message? <Link to="/login" className="btn btn-primary">Go to Login</Link>:""}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ForgotPassword;