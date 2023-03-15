import React from "react";
import { NavLink } from "react-router-dom";

function About1(){
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
                                <NavLink className="nav-link text-white" aria-current="page" to="/home">Home</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/Aboutuser">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          
            <div className="text-white">
       <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">About Us</h1>
            <p className="lead mb-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, ad, provident distinctio doloremque sed architecto nulla sequi impedit a, aliquid aspernatur quis eum perferendis officiis temporibus voluptatum. Eum est beatae adipisci fugit doloribus dolorem maxime voluptatibus repellat dolor officia eos nostrum minima a, mollitia eveniet reiciendis totam ducimus quisquam ipsam! Iste, accusamus optio aperiam dignissimos ipsum voluptatibus aut expedita rerum, eligendi aspernatur provident ratione blanditiis cumque! Dicta voluptate reprehenderit quos quidem dolore asperiores, unde aperiam velit, corporis eum eligendi beatae. Nostrum veniam fuga, ab in ad delectus modi similique impedit iste quam, quibusdam voluptas quisquam amet? Magni quae est sequi.
            </p>
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" alt=""/> */}
            {/* <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink> */}
          </div>
          <div className="about col-md-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" alt=""/>
          </div>
        </div>
      </div>
       </div>
        </>
    );
}

export default About1;