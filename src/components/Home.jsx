import React, { useEffect, useState } from "react";
import {NavLink, Link, useNavigate, Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import Blogcreate from "../Admin page/Blogcreate";

function Home(){
    const[blogData, BlogDatachange]=useState(null);
    const navigate=useNavigate();

    const LoadDetail=(id)=>{
          navigate('/home/view/'+id)
    }

    const LoadEdit=(id)=>{
          navigate('/home/edit/'+id)
    }

    const Removefunction=(id)=>{
          navigate('/home/delete/'+id)
    }

    const usenavigate=useNavigate();
    useEffect(()=>{
      let username=sessionStorage.getItem('username');
      if(username==='' || username===null){
        usenavigate('/login');
      }
    },[]);

    useEffect(()=>{
        fetch(" http://localhost:5000/blogs",{
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
                                <NavLink className="nav-link text-white" aria-current="page" to={'/home'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/about">About</NavLink>
                            </li>
                            <li>
                              <NavLink className="nav-link text-white" to={'/login'} style={{float: 'right'}}>Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div>
              <div className="container">
                <div className="text-white " >
                  <div >
                    <h2>Blog List</h2>
                  </div>
                  <div>
                      <Link to="/create" className="btn btn-dark">Add New (+)</Link>
                    <table className="table table-bordered text-white">
                      <thead className="text-white">
                      <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Author</td>
                        <td>Category</td>
                        <td>Action</td>
                      </tr>
                      </thead>
                      <tbody>
                        { blogData &&
                          blogData.map(item=>(
                            <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.title}</td>
                              <td>{item.Description}</td>
                              <td>{item.author}</td>
                              <td>{item.category}</td>
                              <td><a onClick={()=>{LoadEdit(item.id)}} className="pe-1" >Edit</a>
                              <a onClick={()=>{Removefunction(item.id)}} className="pe-1">Delete</a>
                              <a onClick={()=>{LoadDetail(item.id)}} >View</a>
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

            <Routes>
            <Route path="/home/create" element={<Blogcreate/>}/>
            </Routes>
      </>
    );
}

export default Home;