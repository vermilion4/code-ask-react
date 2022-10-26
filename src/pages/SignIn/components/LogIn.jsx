import React from "react";
import { Formik } from "formik";
import Input from "../../SignUp/components/Input";
import Label from "../../SignUp/components/Input";

export const LogIn = () => {
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
      >
{({
         values,
        //  errors,
        //  touched,
         handleChange,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) =>
    <>
        <form action="">

          {/* email */}
          <div class="form-wrapper">
            <label htmlFor="email" text = "Email Address"></label>
            <Input
              classname={"signup-input"}
              type={"email"}
              id={"email"}
              name={"email"}
              placeholder={"Enter your Email"}
              onChange={handleChange}
              value= {values.email}
            />
          </div>

          {/* password */}
          <div class="form-wrapper">
            
          <label htmlFor="Password" text = "Password"></label>
            <Input
              classname={"signup-input"}
              type={"password"}
              id={"password"}
              name={"password"}
              placeholder={"Enter your Password"}
              onChange={handleChange}
              value= {values.password}
            />
          </div>

          <div className="login-options">
              <div className="remember">
              <Input
        classname={"checkbox"}
        type={"checkbox"}
        id={"rememberMe"}
      
      />
                <label className="remember-me" for="rememberMe">Remember me</label>
              </div>
              <span className="fogotPasswordLink"><a href="./forgotpassword.html">Forgot Password?</a></span>
            </div>

        <button type="submit" 
        className="signup-btn get"
        disabled={isSubmitting} 
        onClick={handleSubmit}>{isSubmitting ? "Loading" : "Log In"}</button> 

<hr />
        </form>
    </>}
    
      </Formik>
    </React.Fragment>
  );
};
