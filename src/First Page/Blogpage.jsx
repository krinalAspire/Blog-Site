import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";


function Blogpage() {
    const [blogData, BlogDatachange] = useState(null);
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


            <div>
                <div className="container">
                    <div>
                        <div className="text-center my-5" >
                            <h2 className="text-white">All Blogs</h2>
                            <hr className="style"/>
                        </div>
                        { blogData &&
                        blogData.map(item=>(
                          <div className="row">
                            <div className="box mb-5 shadow-sm text-white border border-white">
                                <div className="">
                                    <div className="">
                                        <h2>{item.title}</h2>
                                        <hr className="style"/>
                                    </div>
                                    <div className="">
                                        <p>{item.description}</p>
                                        <footer class="blockquote-footer text-info">By {item.author} <cite title="Source Title">{item.category}</cite></footer>
                                    </div>
                                </div>
                            </div>
                          </div>
                          ))
                        }
                        {/* <div className="card">

                            {blogData &&
                                blogData.map(item => (
                                    <div className="mt-2">
                                    <div class="card-header">
                                {item.title}
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>{item.description}</p>
                                    <footer class="blockquote-footer">By {item.author} <cite title="Source Title">{item.category}</cite></footer>
                                </blockquote>
                            </div>
                            </div>
                                ))
                            }
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Blogpage;