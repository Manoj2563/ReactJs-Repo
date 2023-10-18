import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

export function Protfoliotech() {
  return (
    <>
      <div className="container-fluid portfoliotechdiv p-5" id="/Portfoliotech">
        
        <h1 className="text-center p-5 portfoliotechhead">Technical Skills</h1>

        <div className=" d-flex  justify-content-center mx-auto m-2">
          <div className=" col-lg-7 portfoliotech1 row justify-content-center p-5 m-3 rounded">
            <div className="col-lg-5 mx-auto p-2">
              <img className="w-50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png" />
            </div>
            <div className="col-lg-6 text-dark">
              <h2 className="fs-1 text-danger">HTML</h2>
              <p className="fs-5 text-light">Click to view my work</p>
              <Link to="/Portfoliohtml" ><button className="btn btn-primary">Click</button></Link>
            </div>
          </div>
          
        </div>
        <div className=" d-flex  justify-content-center mx-auto m-2">
          <div className=" col-lg-7 portfoliotech1 row justify-content-center p-5 m-3 rounded">
            <div className="col-lg-4 mx-auto">
              <img className="w-50" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" />
            </div>
            <div className="col-lg-6 text-dark">
              <h2 className="fs-1 text-danger">CSS</h2>
              <p className="fs-5 text-light">Click to view my work</p>
              <Link to="/Portfoliocss"><button className="btn btn-primary">Click</button></Link>
            </div>
          </div>
          
        </div>
        <div className=" d-flex  justify-content-center mx-auto m-2">
          <div className=" col-lg-7 portfoliotech1 row justify-content-center p-5 m-3 rounded">
            <div className="col-lg-4 mx-auto">
              <img className="w-50" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" />
            </div>
            <div className="col-lg-6 text-dark">
              <h2 className="fs-1 text-danger">Bootstrap</h2>
              <p className="fs-5 text-light">Click to view my work</p>
              <Link to="/Portfoliobootstrap" ><button className="btn btn-primary">Click</button></Link>
            </div>
          </div>
          
        </div>
        <div className=" d-flex  justify-content-center mx-auto m-2">
          <div className=" col-lg-7 portfoliotech1 row justify-content-center p-5 m-3 rounded">
            <div className="col-lg-4 pe-5 mx-auto">
              <img className="w-75" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png"/>
            </div>
            <div className="col-lg-6 text-dark">
              <h2 className="fs-1 text-danger">Java Script</h2>
              <p className="fs-5 text-light">Click to view my work</p>
              <Link to="/Portfoliojavascript"><button className="btn btn-primary">Click</button></Link>
              
            </div>
          </div>
          
        </div>
        <div className=" d-flex  justify-content-center mx-auto m-2">
          <div className=" col-lg-7 portfoliotech1 row justify-content-center p-5 m-3 rounded">
            <div className="col-lg-4 mx-auto">
              <img className="w-50" src="https://ionicframework.com/docs/icons/logo-react-icon.png" />
            </div>
            <div className="col-lg-6 text-dark">
              <h2 className="fs-1 text-danger">ReactJS</h2>
              <p className="fs-5 text-light">Click to view my work</p>
              <Link to="/Menu"><button className="btn btn-primary">Click</button></Link>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
