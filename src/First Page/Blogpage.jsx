import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";


function Blogpage() {
    const [blogData, BlogDatachange] = useState([]);
  
//   const[currentpage,setcurrentpage]=useState(1);
//   const recordsperpage=3;
//   const lastIndex=currentpage * recordsperpage;
//   const firstIndex= lastIndex - recordsperpage;
//   const records= blogData.slice(firstIndex, lastIndex);
//   const npage=Math.ceil(blogData.length / recordsperpage);
//   const numbers=[...Array(npage +1).keys()].slice(1);

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
                            <h1 className="text-white">Today's Blogs</h1>
                            <hr className="style"/>
                        </div>
                        { 
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
                    </div>
                
                {/* <nav>
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
              </nav> */}

              </div>
            </div>

        </>
    );
//     function prePage(){
//         if(currentpage !== firstIndex){
//          setcurrentpage(currentpage -1)
//         }
//    }
 
//    function nextPage(){
//        if(currentpage !== lastIndex)
//        setcurrentpage(currentpage +1)
//    }
 
//    function changeCpage(id){
//        setcurrentpage(id)
//    }
}

export default Blogpage;