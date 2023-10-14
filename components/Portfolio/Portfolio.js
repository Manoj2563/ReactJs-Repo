import React from "react";
import { Link } from "react-scroll/modules";
import "./Portfolio.css";

export function Portfolio() {
  return (
    <>
      <div className="container-">
        <nav class="navbar navbar-expand-lg navbar-dark  sticky-top" id="portnavbar" >
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" >
              <span class="navbar-toggler-icon"></span>
            </button>
            <h3 className="text-light ps-5">Portfolio</h3>
            <div class="collapse navbar-collapse justify-content-center " id="main" >
              <ul class="navbar-nav m-1 mb-lg-0 p-1">
                <li class="nav-item"><Link activeClass="active" className="Link2 ps-3 pe-3" to="/Portfoliohome" spy={true} smooth={true} offset={-50} duration={50}> {" "} Home{" "}</Link></li>
                <li class="nav-item"><Link activeClass="active" className="Link2 ps-3 pe-3" to="/Portfoliocertificate" spy={true} smooth={true} offset={-50} duration={50}> Certification</Link></li>
                <li class="nav-item"><Link activeClass="active" className="Link2 ps-3 pe-3" to="/Portfolioedu" spy={true}smooth={true} offset={-50}duration={50}>  Qualification</Link>{" "}</li>
                <li class="nav-item"><Link  activeClass="active"  className="Link2 ps-3 pe-3" to="/Portfoliotech" spy={true} smooth={true} offset={-50} duration={50}>  Skills</Link></li>
                <li class="nav-item"><Link  activeClass="active"  className="Link2 ps-3 pe-3" to="/Portfoliocontact" spy={true} smooth={true} offset={-50} duration={50}> Contact</Link>
                </li>
              </ul>
            </div>
        </nav>
      </div>
    </>
  );
}
