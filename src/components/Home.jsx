import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home(){
    const usenavigate=useNavigate();
    useEffect(()=>{
      let username=sessionStorage.getItem('username');
      if(username==='' || username===null){
        usenavigate('/login');
      }
    },[]);
    return(
         <div className="text-white header">
          <Link to={'/home'}>Home</Link>
          <Link to={'/login'} style={{float: 'right'}}>Logout</Link>
          <div>hello</div>
      </div>
    );
}

export default Home;