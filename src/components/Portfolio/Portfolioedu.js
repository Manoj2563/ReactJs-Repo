import React from "react";
import "./Portfolio.css";

export function Portfolioedu() {
  return (
    <>
      <div id="/Portfolioedu" className="portfolioedu container-fluid p-5 ">
        <h1 className="text-center fs-1 portfolioeduh1 p-3">Education Qualification</h1>
        <div className=" justify-content-center gap-5 m-5 ">
          <div className="col-lg-8 mx-auto p-4 m-3 portfolioedu1 rounded row ">
            <div className="col-lg-4">
              <img src="https://media.collegedekho.com/media/img/institute/logo/1435216385.gif" className="w-75" />
            </div>
            <div className="col-lg-8 p-3 ">
              <h3 className="fs-2 text-danger">Bachelor of Mathematics</h3>
              <p className="fs-5">Kongu Arts and Science college,Erode</p>
              <p>(2017 - 2020)</p>
              <br />
              <h4>Percentage : 69%</h4>
            </div>
          </div>
          <div className="col-lg-8 mx-auto p-4 m-3 mt-5 portfolioedu1 rounded row ">
            <div className="col-lg-4">
              <img src="https://1.bp.blogspot.com/-jYx4w4oSH5U/YLMoS-dzfgI/AAAAAAAANuE/ho_5CdMJtgktkwZmxHsQxx9xvC7QcYtOACLcBGAsYHQ/s655/shri%2BMahaa%2BLogo.png" className="w-75" />
            </div>
            <div className="col-lg-8 p-3">
              <h3 className="fs-2 text-danger">HSC</h3>
              <p className="fs-5">Shri Mahaa Higher Secondary School,Erode.</p>
              <p>(2015 - 2017)</p>
              <br />
              <h4>Percentage : 78%</h4>
            </div>
          </div>
          <div className="col-lg-8 mx-auto p-4 m-3 mt-5 portfolioedu1 rounded row ">
            <div className="col-lg-4">
              <img src="https://1.bp.blogspot.com/-jYx4w4oSH5U/YLMoS-dzfgI/AAAAAAAANuE/ho_5CdMJtgktkwZmxHsQxx9xvC7QcYtOACLcBGAsYHQ/s655/shri%2BMahaa%2BLogo.png" className="w-75" />
            </div>
            <div className="col-lg-8 p-3">
              <h3 className="fs-2 text-danger">SSLC</h3>
              <p className="fs-5">Shri Mahaa Higher Secondary School,Erode.</p>
              <p>(2015 - 2017)</p>
              <br />
              <h4>Percentage : 89.5%</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
