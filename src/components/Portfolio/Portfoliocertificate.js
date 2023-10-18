import React from "react";
import Htmlcss from "../Coursera - HTML and CSS in depth_page-0001.jpg";
import HTML from "../Coursera - Introduction to HTML5_page-0001.jpg";
import css from "../Coursera - Introduction to CSS3_page-0001.jpg";
import js from "../Coursera - Programming with Javascript_page-0001.jpg";
import front from "../Coursera - Introduction to Frontend Developer_page-0001.jpg";
import "./Portfolio.css";

export function Protfoliocertificate() {
  return (
    <>
    <div className="container-fluid portfoliocert" id="/Portfoliocertificate">
      <div  className="container-fluid  text-center" >

        <h1 className="portfoliocerth1 fs-1 pt-5 ">Certification</h1>

        <div className="p-5 d-flex justify-content-center gap-5 flex-wrap ">

          <div class="card col-lg-3  p-3 certficard">
            <img src={Htmlcss} class="card-img-top imagecard" alt="..." />
            <div class="card-body certficardbody">
              <h5 class="card-title text-danger">HTML and CSS in Depth</h5>
              <p class="card-text"> HTML ans CSS in Depth certificate from Meta.</p>
            </div>
          </div>

          <div class="card col-lg-3 p-3 certficard">
            <img src={js} class="card-img-top imagecard" alt="..." />
            <div class="card-body certficardbody">
              <h5 class="card-title text-danger">Programming with Javascript</h5>
              <p class="card-text">Programming with Javascript certificate from Meta.</p>
            </div>
          </div>

          <div class="card col-lg-3 p-3 certficard">
            <img src={front} class="card-img-top imagecard" alt="..." />
            <div class="card-body certficardbody">
              <h5 class="card-title text-danger">Introduction to Frontend Developer</h5>
              <p class="card-text">Introduction to Frontend Developer certificate from Meta.</p>
            </div>
          </div>

          <div class="card col-lg-3 p-3 certficard">
            <img src={HTML} class="card-img-top imagecard" alt="..." />
            <div class="card-body certficardbody">
              <h5 class="card-title text-danger">Introduction to HTML5</h5>
              <p class="card-text">Introduction to HTML5 certificate from University of MICHIGAN.</p>
            </div>
          </div>

          <div class="card col-lg-3 p-3 certficard">
            <img src={css} class="card-img-top imagecard" alt="..." />
            <div class="card-body certficardbody ">
              <h5 class="card-title text-danger">Introduction to CSS3</h5>
              <p class="card-text">Introduction to CSS3 certificate from University of MICHIGAN.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
