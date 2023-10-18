import React from "react";
import "./Portfolio.css";
import image from "../myimage.jpg";
import { useTypewriter,Cursor } from "react-simple-typewriter";


export function Portfoliohome() {
  const [Name]=useTypewriter({
    words:['Front-End Develper','UI/UX Designer','Web Developer'],
    backSpeed:100,
    loop:true,
  })
  return (
    <>
    <div className="portfoliohome">
      <div id="/Portfoliohome" className="container-fluid justify-content-center mx-auto d-flex text-light p-5 " >
        <div className="row">
          <div className="col-lg-7 p-5 ">
            <h1 className="fs-1"> I'm <span className="textclrblue"> Manoj Arunachalam </span> </h1>
            <br />
            <br />
            <div>
            <h2 className="fs-2 rotateweb">  I'm a<span className="textclrpink rotateweb-adj"> {Name}</span></h2><br/><br/>
            </div>
            <h3 className="text-danger homedelay">About Me</h3>
            <p className="fs-5 homedelay">
              As a highly passionate and dedicated Front-End Developer based in
              Coimbatore, India, my objective is to utilize my expertise in
              Front-End and Graphic design tools to build premium and visually
              appealing websites. Additionally, my skills in Marketing, Retail,
              and Hospitality sectors can be leveraged to create innovative and
              effective digital solutions for businesses in these industries.
              Ultimately, I strive to create impactful and user-friendly
              websites that drive business growth and success.
            </p><br/>
            <a href=" https://app.luminpdf.com/viewer/652a084302977a47d9cf465e" target="/"><button className="btn btn-success text-light fs-3">Download</button></a>
          </div>
          <div className="col-lg-4 mydivimg rounded p-5">
            <img src={image} className="container-fluid w-100 rounded-circle p-1 myimage" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
