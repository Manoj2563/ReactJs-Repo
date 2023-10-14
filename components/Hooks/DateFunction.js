import React, { useState } from "react";

export function DateFunction() {
    const[Getdate,SetGetdate]=useState('')
    function Calculatedate(){
            let a=document.getElementById("inpdate").value;
            var todaydate= new Date(a)
            todaydate.setDate(todaydate.getDate()+90)
            var output=todaydate.toDateString();
            SetGetdate(output)
    }
    return (
        <>
            <div className="text-center m-5 p-5 datemain">
              <h1>Course Start Date : </h1>
              <label className="p-2">Enter Start Date </label>
                <input type="Date" id="inpdate"/><br/>
                <button onClick={Calculatedate} className="btn btn-warning m-2">Calculate</button>
                <h1>Course End at {Getdate}</h1>
            </div>
            </>
);
}