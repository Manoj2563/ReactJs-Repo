import React from "react";
import image1 from "./Projects/CSS/Screenshot 2023-10-13 092554.png"
import image2 from "./Projects/CSS/Screenshot 2023-10-13 092709.png"
import image3 from "./Projects/CSS/Screenshot 2023-10-13 092733.png"
import image4 from "./Projects/CSS/Screenshot 2023-10-13 092801.png"
import image5 from "./Projects/CSS/Screenshot 2023-10-13 092841.png"
import image6 from "./Projects/CSS/Screenshot 2023-10-13 092911.png"


export function Portfolicss(){
    return(
        <>
        <div id="/Portfoliocss" className="row">
            <div className="col-lg-6 p-3">
                <img src={image1} className="container-fluid" />
            </div>
            <div className="col-lg-6 p-3">
                <img src={ image2 } className="container-fluid"  />
            </div>
            <div className="col-lg-6 p-3">
                <img src={ image3 }  className="container-fluid" />
            </div>
            <div className="col-lg-6 p-3">
                <img src={ image4 } className="container-fluid"  />
            </div>
            <div className="col-lg-6 p-3">
                <img src={ image5 } className="container-fluid"  />
            </div>
            <div className="col-lg-6 p-3">
                <img src={ image6 } className="container-fluid"  />
            </div>
        </div>
        </>
    )
}