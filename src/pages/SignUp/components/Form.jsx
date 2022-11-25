import React from "react";
import { Link } from "react-router-dom";
// import { CreateAccount } from "./CreateAccount";
import {BsGithub} from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import {FcGoogle} from "react-icons/fc";
import { CreateAccount2 } from "./CreateAccount2";

function Form() {

  return (
    <section className="signup-form">
      {/* <CreateAccount /> */}
      <CreateAccount2/>
      <hr class="hr" />

      <button className="signup-btn link">
        <FcGoogle className="google" />
      <span> </span>
      <span>Sign up with Google</span>
        
      </button>

      <button className="signup-btn link">
        <ImLinkedin  className="linkedIn"/>
        <span> </span>
        <span>Sign up with LinkedIn</span>
      </button>


      <button className="signup-btn link">
       <div className="buton">
       <BsGithub className="github" />
        <span> </span>
        <span>Sign up with Github</span>
       </div>
       
      </button>

  
      <div className="signin-wrap" style={{gap:"5px"}}>
        <p className="signup-brief">Already Have an Account?</p>
        <Link to={"/sign-in"} style={{color:"#002828"}}>
          <span>LogIn</span>
        </Link>
      </div>

      <br />
      <span  style={{textDecoration: "none"}}>←</span>
      <Link to={"/"}>
        <span className="back-button "> Back </span>
      </Link>
    </section>
  );
}

export default Form;
