import React from "react";
import image1 from "./Projects/Javascript/Screenshot 2023-10-13 095554.png"
import image2 from "./Projects/Javascript/Screenshot 2023-10-13 095811.png"



export function Portfoliojavascript(){
    return(
        <>
        <div id="/Portfoliojavascript" className="row justify-content-center">
            <div className="col-lg-8 p-3">
                <img src={image1} className="container-fluid" />
            </div>
            <div className="col-lg-8 p-3">
                <img src={ image2 } className="container-fluid"  />
            </div>
            </div>
        </>
    )
}