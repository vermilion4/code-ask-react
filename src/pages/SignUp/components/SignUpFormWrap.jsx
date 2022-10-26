import React from "react"
import Form from "./Form";
import CyclicDesign2 from "./CyclicDesign2";
import SignUpIntro from "./SignupIntro";
import CodeaskLogo from "./CodeaskLogo";
function SignUpFormWrap(){
  return (
    <section class="signup">

      <CyclicDesign2/>
      <CodeaskLogo/>
          <SignUpIntro classname ={"signup-intro"} text={"Create An Account"} paragraph={"Start Your Journey!"}/>
        <Form/>
    </section>
 )       
}
export default SignUpFormWrap