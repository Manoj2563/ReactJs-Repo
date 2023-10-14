import React from "react";
import './congratscard.css'
import image1 from "../image1.png"
import image2 from  "../image2.png"

export function Card(){
    return(
        <>
        <div class="container card1 text-center" id="/card">
            <h1>Congratulation</h1>
            <div class="home text-center mx-auto bg-info p-5 col-lg-5">
              <img src={image1} class="image1" alt="loading"/>
              <h2>Manoj A</h2>
              <p>My Name is Manoj,I am a Frontend Developer</p>
              <img src={image2} class="image1" alt="loading"/>
            </div>
        </div>
        
        </>
    )
}