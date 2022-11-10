import React from "react";
import { Link } from "react-router-dom";
import { CreateAccount } from "./CreateAccount";
import {BsGithub} from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import {FcGoogle} from "react-icons/fc";


function Form() {
  return (
    <section class="signup-form">
      <CreateAccount />
      <hr class="hr" />

      <button className="signup-btn link">
        <FcGoogle />
      <span> </span>
      <span>Sign up with Google</span>
        
      </button>

      <button className="signup-btn link">
        <BsGithub/>
        <span> </span>
        <span>Sign up with Github</span>
       
      </button>

      <button className="signup-btn link">
        <ImLinkedin />
        <span> </span>
        <span>Sign up with LinkedIn</span>
      </button>

      <div className="signin-wrap">
        <p className="signup-brief">Already Have an Account?</p>
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
