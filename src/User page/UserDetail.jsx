import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserDetail(){
    const[blogData, BlogDatachange]=useState([]);
    const [query,setQuery]=useState("");

    const navigate = useNavigate();

    const User=JSON.parse(localStorage.getItem("userData"));
    const userId=User.data.userid

    const[currentpage,setcurrentpage]=useState(1);
    const recordsperpage=3;
    const lastIndex=currentpage * recordsperpage;
    const firstIndex= lastIndex - recordsperpage;
    const records= blogData.slice(firstIndex, lastIndex);
    const npage=Math.ceil(blogData.length / recordsperpage);
    const numbers=[...Array(npage +1).keys()].slice(1);

    const LoadDetail = (_id) => {
        navigate('/home/view/' + _id)
      }

    useEffect(()=>{
        fetch("http://localhost:5000/blogs",{
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
                                <NavLink className="nav-link text-white" aria-current="page" to={'/user'}>Home</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/about">About</NavLink>
                            </li>
                        </ul>
                    </div>
                    <span className="navbar-brand nav-link text-white fw-bold">Welcome User:-{userId}</span>
          <NavLink to={'/login'} className="navbar-brand ms-3 nav-link text-white btn btn-outline-info p-1" ><span className="fa fa-sign-out me-2"></span>Logout</NavLink>
                </div>
            </nav>

            <div>
        <div className="container">
          <div className="pt-5 text-white " >
            <div>
              <h2>Blog List</h2>
            </div>
            <div>
              <div className="mb-2">
              <input type="text"
                // className="mb-2"
                placeholder='Search title here...'
                onChange={(e)=>setQuery(e.target.value)}
            />
              </div>
              
              <table className="blogtable table table-bordered text-white">
                <thead className="text-white">
                  <tr>
                    {/* <td>ID</td> */}
                    <td>Title</td>
                    <td className="col-sm-6">Description</td>
                    <td>Author</td>
                    <td>Category</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    records.filter((item)=>item.title.toLowerCase().includes(query)).map(item => (
                      <tr key={item._id}>
                        {/* <td>{item.id}</td> */}
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.author}</td>
                        <td>{item.category}</td>
                        <td>
                          <a onClick={() => { LoadDetail(item._id) }} className=" ps-3 text-white" data-toggle="tooltip" data-placement="bottom" title="View" ><i class="fa fa-eye" aria-hidden="true"></i></a>

                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>

              <nav>
                <ul className="pagination">
                    <li className="page-item"> 
                        <a href="#" className="page-link" onClick={prePage}>Prev</a>
                    </li>
                    {
                      numbers.map((n,i)=>(
                        <li className={`page-item ${currentpage === n ? 'active' : ''}`} key={i}>
                           <a href="#" className="page-link" onClick={()=>changeCpage(n)}>{n}</a>
                        </li>
                      ))
                    }
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={nextPage}>Next</a>
                    </li>
                </ul>
              </nav>

            </div>
          </div>
        </div>
      </div>
        </>
    );

    function prePage(){
      if(currentpage !== firstIndex){
       setcurrentpage(currentpage -1)
      }
 }

 function nextPage(){
     if(currentpage !== lastIndex)
     setcurrentpage(currentpage +1)
 }

 function changeCpage(id){
     setcurrentpage(id)
 }

}

export default UserDetail;