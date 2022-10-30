import React from "react";
import { Link } from "react-router-dom";
import { LogIn } from "./LogIn";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Form() {
  return (
    <section class="signup-form">
      <LogIn/>
      {/* <hr class="hr" /> */}

      <button className="signup-btn link">
        <FaGoogle /> 
        <span>  </span> 
       <span>Sign up with Google</span> 
      </button>

      <button className="signup-btn link">
        <FaGithub />
        <span>  </span>
        <span>Sign up with Github</span>
      
      </button>

      <button className="signup-btn link">
        <FaLinkedin />

        <span> </span>
        <span>Sign up with LinkedIn</span>
      </button>

      <div className="signin-wrap">
        <p className="signup-brief">Don't have an Account?</p>
        <Link to={"/sign-up"}>
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
