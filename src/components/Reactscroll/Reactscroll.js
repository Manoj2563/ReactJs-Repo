import React from "react";
import { Link } from "react-scroll";

export function Reactscroll(){
    return(
        <>
        <nav className="row">
        
              <Link activeClass="active" to="Home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
              <Link activeClass="active" to="Home" spy={true} smooth={true} offset={50} duration={500}>Congratscard</Link>
              <Link activeClass="active" to="Home" spy={true} smooth={true} offset={50} duration={500}>Login</Link>
              <Link activeClass="active" to="Home" spy={true} smooth={true} offset={50} duration={500}>Notification</Link>
              <Link activeClass="active" to="Home" spy={true} smooth={true} offset={50} duration={500}>Feedback</Link>
           
      </nav>

        </>
    )
}