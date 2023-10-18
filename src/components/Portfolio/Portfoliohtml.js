import React from "react";
import image1 from "./Projects/HTML/Screenshot 2023-10-13 091002.png"
import image2 from "./Projects/HTML/Screenshot 2023-10-13 091033.png"


export function Portfoliohtml(){
    return(
        <>
        <div id="/Portfoliohtml" className="row">
            <div className="col-lg-6 p-3">
                <img src={image1} className="container-fluid"  />
            </div>
            <div className="col-lg-6 p-3">
                <img src={ image2 } className="container-fluid"  />
            </div>
        </div>
        </>
    )
}