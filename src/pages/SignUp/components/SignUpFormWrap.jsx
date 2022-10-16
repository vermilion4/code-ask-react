
import Form from "./Form";
import SignUpIntro from "./SignupIntro";
import CodeaskLogo from "./CodeaskLogo";
function signupformWrap(){
  return (
    <section class="signup">
      <CodeaskLogo/>
          {/* signupIntro comes here */}
          <SignUpIntro classname ={"signup-intro"} text={"Create An Account"} paragraph={"Start Your Journey!"}/>
         {/* form comes here */}

        <Form/>
    </section>
 )       
}
export default signupformWrap