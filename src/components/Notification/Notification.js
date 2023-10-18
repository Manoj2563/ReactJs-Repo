import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons"
import {faBell} from "@fortawesome/free-regular-svg-icons"
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons"

export function Notification(){
    return(
        <>
        <div class="col-lg-5 p-5 mx-auto " id="/Notification">
            <h1 class="text-center">Notification</h1>
            <div class="fs-2 p-5 m-2 bg-primary rounded text-white"><FontAwesomeIcon icon={faCircleCheck}  /> Information Message </div>
            <div class="fs-2 p-5 m-2  bg-success rounded text-white"><FontAwesomeIcon icon={faCircleCheck}  /> Success Message</div>
            <div class="fs-2 p-5 m-2  bg-warning rounded text-white"><FontAwesomeIcon icon={faBell} /> Warning Message</div>
            <div class="fs-2 p-5 m-2  bg-danger rounded text-white"><FontAwesomeIcon icon={faCircleExclamation} /> Error Message</div>
        </div>
        </>
    )
}