import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Blogcreate() {
    const [id, idchange] = useState("");
    const [title, titlechange] = useState("");
    const [description, descriptionchange] = useState("");
    const [author, authorchange] = useState("");
    const [category, categorychange] = useState("cs-it");

    const navigate=useNavigate(); 

    const handlesubmit=(e)=>{
        e.preventDefault();
        const bdata={id,title,description,author,category};
       
        fetch("http://localhost:5000/blogs",{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(bdata)
        }).then((res)=>{
            toast.success('Saved successfully');
            navigate('/home');
        }).catch((err)=>{
            toast.error("Failed:" +err.message);
        })
    }

    return (
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
                                <NavLink className="nav-link text-white" to={'/login'} style={{ float: 'right' }}>Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container text-white" onSubmit={handlesubmit}>
                        <div>
                            <h2>Blog Create</h2>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled='disabled' className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input value={title} onChange={e => titlechange(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea value={description} onChange={e=>descriptionchange(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Author</label>
                                        <input value={author} onChange={e => authorchange(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Category</label>
                                        <select value={category} onChange={e => categorychange(e.target.value)} className="form-control">
                                            <option value="cs-it">CS-IT</option>
                                            <option value="travel">Travel</option>
                                            <option value="food">Food</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-2">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success">Save</button> |
                                        <Link to={'/home'} className="btn btn-danger">Back</Link>
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

export default Blogcreate;