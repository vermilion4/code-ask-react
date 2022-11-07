import React from "react";
import { Link } from "react-router-dom";
import { CreateAccount } from "./CreateAccount";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Form() {
  return (
    <section class="signup-form">
      <CreateAccount />
      <hr class="hr" />

      <button className="signup-btn link">
        <FaGoogle />
      <span> </span>
      <span>Sign up with Google</span>
        
      </button>

      <button className="signup-btn link">
        <FaGithub />
        <span> </span>
        <span>Sign up with Github</span>
       
      </button>

      <button className="signup-btn link">
        <FaLinkedin />
        <span> </span>
        <span>Sign up with LinkedIn</span>
      </button>

      <div className="signin-wrap">
        <p className="signup-brief">Already Have an Account?</p>
        {/* <Link to={"/sign-in"}> */}
        <Link to={"/answers"}>
          <span>LogIn</span>
        </Link>
      </div>

      <Link to={"/"}>
        <p className="back-button "> ← Back </p>
      </Link>
    </section>
  );
}

export default Form;
