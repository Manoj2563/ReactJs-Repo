import React, { useState } from "react";

export function Hookscounter(){
    // const[variable,setVariable]=useState(ini-value)
    const[count,setCount]=useState(0)
    return(
        <>
        <div className="text-center m-5 p-5">
        <h1>{count}</h1>
        <button className="btn btn-primary m-5" onClick={()=>{setCount(count+1)}}>Add</button>
        <button className="btn btn-warning m-5" onClick={()=>{setCount(count-1)}}>Subract</button>
        <button className="btn btn-danger m-5" onClick={()=>{setCount(count*0)}}>Reset</button>
        </div>

        </>
    );
}