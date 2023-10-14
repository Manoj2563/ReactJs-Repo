import React from "react";
import './socialbutton.css'

export function Socialbutton(){
    return(
        <>
        <div class="social text-center">
            <h1 class="text-center p-5 text-white socialh1">Social Buttons</h1>
            <div class=" ">
                <button class="btn btn-warning m-1 "> Like </button>
                <button class="btn btn-light m-1"> Comment </button>
                <button class="btn btn-primary m-1"> Share </button>
            </div>
        </div>
        </>
    )
}