import React from "react";
import LogInForm from "./LogInForm";
import SignUpIntro from "../../SignUp/components/SignupIntro";
import CodeaskLogo from "../../SignUp/components/CodeaskLogo";


function signInformWrap(){
  return (
    <section className="signin" >

          <CodeaskLogo/>
          {/* signupIntro comes here */}
        <SignUpIntro className ={"signup-intro"} text={"Log Into Your Account"} paragraph={"Welcome Back! Please Enter Your Details"}/>
         {/* form comes here */}

        <LogInForm/>
    </section>
 )       
}
export default signInformWrap