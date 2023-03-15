import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate, Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import Blogcreate from "../Admin page/Blogcreate";

function Home() {
  const [blogData, BlogDatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate('/home/view/' + id)
  }

  const LoadEdit = (id) => {
    navigate('/home/edit/' + id)
  }

  const Removefunction = (id) => {
    if (window.confirm('are you sure you want to remove ?')) {
      fetch("http://localhost:5000/blogs/" + id, {
        method: 'DELETE'
      }).then((res) => {
        toast.success('Removed successfully');
        window.location.reload();
      }).catch((err) => {
        toast.error("Failed:" + err.message);
      })
    }
  }

  const usenavigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem('username');
    if (username === '' || username === null) {
      usenavigate('/login');
    }
  }, []);

  useEffect(() => {
    fetch(" http://localhost:5000/blogs", {
      method: 'GET'
    }).then(result => result.json())
      .then(result => BlogDatachange(result))
      // }).then((resp)=>{
      //   console.log(resp)
      //   // toast.success('Success'); 
      // })
      .catch((err) => {
        toast.error("Failed : " + err.message);
      })
  }, []);
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
                    <td className="col-sm-6">Description</td>
                    <td>Author</td>
                    <td>Category</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {blogData &&
                    blogData.map(item => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.author}</td>
                        <td>{item.category}</td>
                        <td>
                          <a onClick={() => { LoadDetail(item.id) }} className="pe-3 ps-2 text-dark" data-toggle="tooltip" data-placement="bottom" title="View" ><i className="fa fa-eye" aria-hidden="true"></i></a>
                          <a onClick={() => { LoadEdit(item.id) }} className="pe-3 text-dark" data-toggle="tooltip" data-placement="bottom" title="Edit"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                          <a onClick={() => { Removefunction(item.id) }} className="pe-3 text-dark" data-toggle="tooltip" data-placement="bottom" title="Delete"><i className="fa fa-trash" aria-hidden="true"></i></a>

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
        <Route path="/home/create" element={<Blogcreate />} />
      </Routes>
    </>
  );
}

export default Home;