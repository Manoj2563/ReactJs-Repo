import React from "react";
import { Link } from "react-scroll/modules";


export function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark gap-3 sticky-top">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="main">
            <ul class="navbar-nav m-1 mb-lg-0">
              <li class="nav-item"><Link activeClass="active" className="Link1 p-1" to="/" spy={true} smooth={true} offset={-50} duration={50}>Home</Link></li>
              <li class="nav-item"><Link activeClass="active" className="Link1 p-1" to="/card" spy={true} smooth={true} offset={-50} duration={50}>Congratscard</Link> </li>
              <li class="nav-item"><Link activeClass="active" className="Link1 p-1" to="/Notification" spy={true} smooth={true} offset={-50} duration={50}>Notification</Link></li>
              <li class="nav-item"><Link activeClass="active" className="Link1 p-1" to="/Login" spy={true} smooth={true} offset={-50} duration={50}>Login</Link></li>
              <li class="nav-item"><Link activeClass="active" className="Link1 p-1" to="/Technologycard" spy={true} smooth={true} offset={-50} duration={50}>Technologycard</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}
