
import React from "react";
import CyclicDesign2 from "./components/CyclicDesign2";
import SignUpFormWrap from "./components/SignUpFormWrap";
import SignUpImageBrief from "../../components/SignUpImageBrief";
import "../../stylesheets/LoginAside.css"
import "../../stylesheets/Signup.css"

function SignUp() {
 return(  

    <div className="mainwrap">
     <section className="signup-image">
        <SignUpImageBrief/>
      </section>

       <section className="signupform-wrapper">
        <CyclicDesign2/>

        <SignUpFormWrap/>

    </section>
    </div>

)
}
export default SignUp