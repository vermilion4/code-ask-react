import React from "react";
// import CyclicDesign2 from "../components/CyclicDesign2";
import CyclicDesign2 from "../SignUp/components/CyclicDesign1";
import SignInFormWrap from "../SignIn/components/SignInFormWrap"
import SignUpImageBrief from "../../components/SignUpImageBrief";
// import SignUpImageBrief from "../components/SignUpImageBrief";
import "../../stylesheets/LoginAside.css"
import "../../stylesheets/Signup.css"


 export function SignIn() {
 return(  

  <div className="main">
  <section className="signup-image">
     <SignUpImageBrief/>
   </section>

    <section className="signupform-wrapper">
     <CyclicDesign2/>

     <SignInFormWrap/>

 </section>
 </div>
)
}

