import React, { useState } from "react";
import './Fruits.css'

export function Fruits(){
    // const[variable,setVariable]=useState(ini-value)
    const[mango,setMango]=useState(0)
    const[banana,setBanana]=useState(0)
    
    return(
        <>
        <div className="text-center m-5 p-5">
        <h1>Bob ate {mango} mangoes {banana} banana </h1>
        <div className="row d-flex justify-content-center">
            <div className="col-lg-6 mb-5">
            <img src="https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg" className="imgfruits"></img><br/>
            <button className="btn btn-primary p-1 m-1" onClick={()=>{setMango(mango+1)}}>Add Mango</button>
            </div>
            <div className="col-lg-6 mt-5">
            <img src="https://www.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-260nw-563183962.jpg" className="imgfruits "></img><br/>
            <button className="btn btn-primary p-1 m-1" onClick={()=>{setBanana(banana+1)}}>Add Banana</button>
            </div>
        </div>
        
        </div>

        </>
    );
}