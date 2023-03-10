import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');

  const usenavigate=useNavigate();

  useEffect(()=>{
    sessionStorage.clear();
  },[]);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if(validate()){
      //  console.log("proceed");
      fetch("http://localhost:5000/users/"+username).then((res)=>{
        return res.json();
      }).then((resp)=>{
         //console.log(resp)
         if(Object.keys(resp).length===0){
          toast.error('Please Enter valid username');
         } else{
           if(resp.password===password){
              toast.success('Success');
              sessionStorage.setItem ('username',username);
              usenavigate('/')
           } else{
             toast.error('please Enter valid password');
           }
         }
      }).catch((err)=>{
       toast.error('Login Failed due to'+err.message);
      });
    }
  }
  const validate=()=>{
    let result=true;
    if(username==='' || username===null){
      result=false;
      toast.warning('Please Enter Username')
    }
    if(password==='' || password===null){
      result=false;
      toast.warning('Please Enter Password')
    }
    return result;
  }
  return (
    <>
      <div>
        <section className="container">
          <div className="row content d-flex justify-content-center">
            <div className="col-md-5">
              <div className="box shadow bg-white p-4">
                <h2 className="mb-4 text-center fs-1">Login Form</h2>
                <form className="mb-3" onSubmit={ProceedLogin}>
                  <div className="form-floating mb-3">
                    <input value={username} onChange={e=>usernameupdate(e.target.value)} className="form-control rounded-0" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatngInput">User Name<span className="text-danger">*</span></label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" value={password} onChange={e=>passwordupdate(e.target.value)} className="form-control rounded-0" id="floatingPassword" placeholder="password" />
                    <label htmlFor="floatngPassword">Password<span className="text-danger">*</span></label>
                  </div>
                  
                  <div className="d-grid gap-2 mb-3">
                    <button type="submit" className="btn btn-dark btn-lg border-0 rounded-0">Login</button>
                  </div>
                  <div className="mb-3 text-right">
                    <div>Don't have any account?<Link to={"/register"} title="get registered here" className="text-decoration-none">create one</Link></div>
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