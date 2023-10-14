import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
export function Details() {
    const [Details, setDetail] = useState([])
    var {id}=useParams()
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+id)
            .then(res => res.json())
            .then(viewdetail => setDetail(viewdetail))
    })
    return(
        <>
            <div className="container-fluid row p-5">
                <div className="col-lg-6 p-5 bg-dark mx-auto">
                    <img src={Details.image} className="container-fluid w-50 mx-auto "/>
                </div>
                <div className="col-lg-6 p-5">
                    <h1> <b>Product Title:</b> {Details.title}</h1>
                    <br/>
                    <h2> <b>Category:</b> {Details.category}</h2>
                    <br/>
                    <h2> <b>Description:</b> {Details.description}</h2>
                    <br/>
                    {/* <StarRatings rating={Details.rating.rate} starSpacing="small" starDimension="30px" starRatedColor="yellow"/> */}
                    <h2><b> price :</b> ${Details.price}</h2><br/>
                </div>
            </div>
        </>
    );
}
