import React from "react";
import SignInFormWrap from "../SignIn/components/SignInFormWrap"
import SignUpImageBrief from "../../components/SignUpImageBrief";
import CyclicDesign2 from "../SignUp/components/CyclicDesign2";
import "../../stylesheets/LoginAside.css"
import "../../stylesheets/Signup.css"


 export function SignIn() {
 return(  

  <div className="mainwrap">
  <section className="signup-image">
     <SignUpImageBrief/>
   </section>

    <section className="signupform-wrapper">
    <CyclicDesign2/>

    <SignInFormWrap 
    />

 </section>
 </div>
)
}

