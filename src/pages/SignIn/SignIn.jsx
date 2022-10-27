import React from "react";
import SignInFormWrap from "../SignIn/components/SignInFormWrap"
import SignUpImageBrief from "../../components/SignUpImageBrief";
import "../../stylesheets/LoginAside.css"
import "../../stylesheets/Signup.css"


 export function SignIn() {
 return(  

  <div className="main">
  <section className="signup-image">
     <SignUpImageBrief/>
   </section>

    <section className="signupform-wrapper">
    <SignInFormWrap/>

 </section>
 </div>
)
}

