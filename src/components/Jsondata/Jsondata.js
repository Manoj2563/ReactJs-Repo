import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import '../Menu/Menu.css'
import { Productdetails } from "./Productdetails";

export function Jsondata() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then(Response => Response.json())
      .then(getdata => setData(getdata));
  });
  return (
    <> 
      <h1 className="text-center m-3">Product Details</h1>
      <div className="container-fluid row text-center justify-content-center">
      {data.map((value, index) => (
        <>  
          <div class="card col-lg-3 bg-dark text-light m-1 p-3" >
          <Link to={`/details/${value.id}`}><img src={value.image} class="card-img-top justify-content-center w-50 mx-auto" alt="..." /></Link>
            <div class="card-body">
              <h5 class="card-title">{value.title}</h5>
              <p class="card-text"> price: ${value.price} </p>
              <div className="stardiv fs-6">
              <StarRatings rating={value.rating.rate} starSpacing="small" starDimension="30px" starRatedColor="yellow"/></div>
              <p class="card-text"> rating : {value.rating.rate} </p>
              <Link to={`/details/${value.id}`} class="btn btn-primary">view</Link>
            </div>
          </div>
        </>
      ))}
      </div>
    </>
  );
}
