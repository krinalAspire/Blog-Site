import React, { useEffect, useState } from "react";
import {NavLink ,Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [userid, useridupdate] = useState('');
  const [password, passwordupdate] = useState('');

  const usenavigate=useNavigate();

  useEffect(()=>{
    localStorage.clear();
  },[]);

  const validate=()=>{
    let result=true;
    if(userid==='' || userid===null){
      result=false;
      toast.warning('Please Enter Username')
    }
    if(password==='' || password===null){
      result=false;
      toast.warning('Please Enter Password')
    }
    return result;
  }

  const ProceedLogin = (e) => {
    e.preventDefault();
    let regobj={userid,password};
    if(validate()){
      //  console.log("proceed");
      fetch("http://localhost:5000/login",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(regobj)
      }).then((res)=>{
        return res.json();
      }).then((data)=>{
        // console.log("res",data);
        const token=data.token;
        const varifiedData={data:data.data,token:token}
        localStorage.setItem("userData",JSON.stringify(varifiedData))

        if(!token){
          toast.error("Invalid Login");
        } else {
          // usenavigate("/home");
          if(varifiedData.data.role==="admin"){
           
            usenavigate("/home")
            toast.success("Login Succesfully")  
          }else{
            usenavigate("/user")
            toast.success("Login SuccesFully")
          }
        } 
      })
      // .then((resp)=>{
      //    //console.log(resp)
      //    if(Object.keys(resp).length===0){
      //     toast.error('Please Enter valid username');
      //    } else{
      //      if(resp.password===password){
      //         toast.success('Success');
      //         localStorage.setItem ('userid',userid);
      //         usenavigate('/home')
      //      } else{
      //        toast.error('please Enter valid password');
      //      }
      //      if(resp.role==='admin'){
      //         usenavigate('/home')
      //      }else{
      //         usenavigate('/user')
      //      }
      //    }
      // })
      .catch((err)=>{
       toast.error('Login Failed due to'+err.message);
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
                <h2 className="mb-4 text-center fs-1">Login Form</h2>
                <form className="mb-3" onSubmit={ProceedLogin}>
                  <div className="form-floating mb-3">
                    <input value={userid} name="userid" onChange={e=>useridupdate(e.target.value)} className="form-control rounded-0" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatngInput">User Name<span className="text-danger">*</span></label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" name="password" value={password} onChange={e=>passwordupdate(e.target.value)} className="form-control rounded-0" id="floatingPassword" placeholder="password" />
                    <label htmlFor="floatngPassword">Password<span className="text-danger">*</span></label>
                  </div>
                  
                  <div className="d-grid gap-2 mb-3">
                    <button type="submit" className="btn btn-dark btn-lg border-0 rounded-0">Login</button>
                  </div>
                  <div className="mb-3 text-right">
                    <div>Don't have any account?<Link to={"/register"} title="get registered here" className="text-decoration-none">create one</Link></div>
                    <div>Forgot Password?<Link to={"/password-reset"} className="text-decoration-none">Click Here</Link></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;