import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear,faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons"
import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons"
import { Link } from 'react-router-dom'
import './Feedback.css'

export function Feedback(){
    return(
        <>
        <div className="feedbackmain container justify-content-center mt-5 p-5">
            <h3>How satisfied are you with our customer support perfomance</h3>
            <div className="feedbackicon d-flex justify-content-around m-5"> 
            <Link to='/feedout'><FontAwesomeIcon icon={faFaceSadTear} id="sad" className="me-2"/></Link>
            <Link to='/feedout'><FontAwesomeIcon icon={faFaceSmileBeam} id="sad" className="me-2"/></Link>
            <Link to='/feedout'><FontAwesomeIcon icon={faFaceLaughBeam} id="sad" className="me-2"/></Link>
           
            </div>
        </div>

        </>
    )
}