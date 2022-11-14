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
        <FcGoogle /> 
        <span>  </span> 
       <span>Sign up with Google</span> 
      </button>

      <button className="signup-btn link">
        <BsGithub/>
        <span>  </span>
        <span>Sign up with Github</span>
      
      </button>

      <button className="signup-btn link">
        <ImLinkedin/>

        <span> </span>
        <span>Sign up with LinkedIn</span>
      </button>

      <div className="signin-wrap">
        <p className="signup-brief">Don't have an Account?</p>
        <Link to={"/answers"}>
        {/* <Link to={"/sign-up"}> */}
          <span>SignUp</span>
        </Link>
      </div>

      <Link to={"/"}>
        <p className="back-button "> ← Back </p>
      </Link>
    </section>
  );
}

export default Form;
