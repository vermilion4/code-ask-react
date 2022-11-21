import React from "react";
import { Link } from "react-router-dom";
// import { LogIn } from "./LogIn";
import {BsGithub} from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import {FcGoogle} from "react-icons/fc";
import {Loggedin} from "./Loggedin";

function Form() {
  return (
    <section>
      {/* <LogIn/> */}
      <Loggedin/>
      {/* <hr class="hr" /> */}

      <button className="signup-btn link">
        <FcGoogle className="google"/> 
        <span>  </span> 
       <span>Sign up with Google</span> 
      </button>

      <button className="signup-btn link">
        <ImLinkedin className="linkedIn"/>

        <span> </span>
        <span>Sign up with LinkedIn</span>
      </button>


      <button className="signup-btn link">
        <BsGithub className="github"/>
        <span>  </span>
        <span>Sign up with Github</span>
      
      </button>

      
      <div className="signin-wrap" style={{gap:"5px"}}>
        <p className="signup-brief">Don't have an Account?</p>
      
        <Link to={"/sign-up"} style={{color:"#002828"}}>
          <span>SignUp</span>
        </Link>
      </div>
      <span  style={{textDecoration: "none"}}>←</span>
      <Link to={"/"} >
        <span className="back-button ">  Back </span>
      </Link>
    </section>
  );
}

export default Form;
