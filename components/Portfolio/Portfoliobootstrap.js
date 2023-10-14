import React from "react";
import image1 from "./Projects/Bootstarp/Screenshot 2023-10-13 093857.png"
import image2 from "./Projects/Bootstarp/Screenshot 2023-10-13 093955.png"
import image3 from "./Projects/Bootstarp/Screenshot 2023-10-13 094102.png"
import image4 from "./Projects/Bootstarp/Screenshot 2023-10-13 094200.png"
import image5 from "./Projects/Bootstarp/Screenshot 2023-10-13 094240.png"
import image6 from "./Projects/Bootstarp/Screenshot 2023-10-13 094333.png"


export function Portfolibootstrap(){
    return(
        <>
        <div id="/Portfoliobootstrap" className="row">
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