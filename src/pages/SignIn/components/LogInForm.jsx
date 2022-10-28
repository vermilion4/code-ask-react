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
      <hr class="hr" />

      <button className="signup-btn link">
        <FaGoogle />
        Sign up with Google
      </button>

      <button className="signup-btn link">
        <FaGithub />
        Sign up with Github
      </button>

      <button className="signup-btn link">
        <FaLinkedin />
        Sign up with LinkedIn
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
