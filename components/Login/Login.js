import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

export function Login() {
  return (
    <>
      <div class="p-5 d-flex flex-wrap line justify-content-center" id="/Login">
        <div class="d-flex flex-wrap">
          <div class="bg-light p-5 col-lg-6 col-md-12 col-sm-11 col-10 ">
            <img
              class="img rounded-circle"
              src="https://i.ytimg.com/vi/AQ5F7I7tnsc/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCBuQ9OUjTfYtNwDzvDdtjFjDdzRA   "  
            />
          </div>
          <div class=" p-2 main2 bg-light col-lg-6 col-md-12 col-sm-11 col-10">
            <h2>Member Login</h2>
            <br />
            <br />

            <div className="name text-center">
              <FontAwesomeIcon icon={faEnvelope} id="font" />
              <input type="name" id="logininput" placeholder=" Enter Mail ID" />
            </div>
            <br />
            <br />

            <div className="name text-center">
              <FontAwesomeIcon icon={faLock} id="font" />
              <input type="password" id="logininput" placeholder=" Enter Password" />
            </div>
            <br />
            <br />

            <button class="p-2 fs-5 loginbutton">LOGIN</button>
            <br />
            <br />
            <p>
              Forgot <span className="loginspan">Username / Password ? </span>
            </p>
            <br />
            <br />
            <p>Create your account <FontAwesomeIcon icon={faArrowRight} id="last" /></p>
          </div>
        </div>
      </div>
    </>
  );
}