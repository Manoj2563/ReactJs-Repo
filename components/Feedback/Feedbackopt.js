import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import './Feedback.css'

export function Feedbackopt(){
    return(
        <>
        <div className="feedbackoptmain container text-center p-5 mt-5 ">
        <FontAwesomeIcon icon={faHeart} id="heart"/>
        <h3>Thank You !</h3>
        <p>We will use your Feedback to improve our customer support perfomance</p>
        </div>
        </>
    )
}