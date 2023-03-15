import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Blogview(){
    const {blogid}=useParams();
    
    const[blogdata, BlogDatachange]=useState({});

    const navigate=useNavigate();

    useEffect(()=>{
        fetch("http://localhost:5000/blogs/"+blogid,{
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
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
        <div className="container-fluid py-2">
          <div className="navbar-brand text-white" to="/">Blog</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <NavLink className="nav-link text-white" aria-current="page" to={'/home'}>Blog List</NavLink>
              </li> */}
              {/* <li>
                <NavLink className="nav-link text-white" to={'/login'} style={{ float: 'right' }}>Logout</NavLink>
              </li> */}
            </ul>
          </div>
          {/* <span className="navbar-brand nav-link text-white fw-bold">Welcome Admin User</span> */}
          <NavLink to={'/login'} className="navbar-brand ms-3 nav-link text-white btn btn-outline-info p-1" ><span className="fa fa-sign-out me-2"></span>Logout</NavLink>
        </div>
      </nav>

      <div className="container">
           <div>
              <div>
                <h1 className="text-white">Blog Details</h1>
              </div>
              <hr className="style"/>
           
        { blogdata &&
        <div className="text-white"> 
        <h2>Title : <b>{blogdata.title}</b></h2>
        <h3 className="pt-2">Description</h3>
        <h5>Description : {blogdata.description}</h5>
        <h3 className="pt-2">Other Details</h3>
        <h5>Author : {blogdata.author}</h5>
        <h5>Category : {blogdata.category}</h5>

        <br/>
        {/* <Link to={'/userlist'||'/user'}  className="btn btn-dark">Back To BlogList</Link> */}
        </div>
        }
        </div>
      </div>

        </>
    );
}

export default Blogview;