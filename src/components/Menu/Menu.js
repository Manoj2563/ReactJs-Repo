import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export function Menu() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark gap-3 sticky-top ">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main">
            <ul class="navbar-nav m-1 mb-lg-0">
              <li class="nav-item"><Link className="Link1 p-3" to="/">  Home </Link></li>
              <li class="nav-item"> <Link className="Link1 p-3" to="/card">  Congratscard </Link></li>
              <li class="nav-item"><Link className="Link1 p-3" to="/SuperoverLeague">  SuperoverLeague </Link></li>
              <li class="nav-item"><Link className="Link1 p-3" to="/Socialbutton">  Socialbutton </Link></li>
              <li class="nav-item"><Link className="Link1 p-3" to="/Notification">  Notification </Link></li>
              <li class="nav-item"><Link className="Link1 p-3" to="/Login">  Login </Link></li>
              <li class="nav-item"><Link className="Link1 p-3" to="/Technologycard"> Technologycard </Link></li>
              <li class="nav-item"><Link className="Link1 p-3" to="/Feedback">  Feedback App </Link></li>
              <li className="nav-item dropdown spannav">
                <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className=" Link1">others</span>
                </a>
                <ul  class="dropdown-menu dropdown-menu-dark"  aria-labelledby="navbarDarkDropdownMenuLink">
                  <li className=" dropdown-item"><Link to="/Hookscounter" className="nav-item Link1  ">  Counter </Link></li>
                  <li className=" dropdown-item"><Link to="/Fruits" className="nav-item Link1">  Fruits </Link></li>
                  <li className=" dropdown-item"><Link to="/Date" className="nav-item Link1 ">  Date </Link></li>
                  <li className=" dropdown-item"><Link to="/Jsondata" className="nav-item Link1 ">  Jsondata </Link></li>
                  <li className=" dropdown-item"><Link to="/Portfolio" className="nav-item Link1 ">  Portfolio </Link></li>
                  
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
