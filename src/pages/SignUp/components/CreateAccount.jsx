import React from "react";
import { Formik } from "formik";
import Input from "./Input";
import Label from "./Label";

export const CreateAccount = () => {
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
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
          {/* Name */}
          <div class="form-wrapper">
            <Label name={"name"} text={"Name"} />
            <Input
              classname={"signup-input"}
              type={"text"}
              id={"name"}
              name={"name"}
              placeholder={"Enter your name"}
              onChange={handleChange}
              value= {values.name}
            />
          </div>

          {/* email */}
          <div class="form-wrapper">
            <Label name={"email"} text={"Email"} />
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
            <Label name={"password"} text={"Password"} />
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

          {/*confirm password  */}
          <div class="form-wrapper">
            <Label name={"password"} text={"Confirm Password"} />
            <Input
              classname={"signup-input"}
              type={"password"}
              id={"confirm-password"}
              name={"confirm-password"}
              placeholder={"confirm-password"}
              onChange= {handleChange}
              value= {values.confirmPassword}
            />
          </div>
          <hr />

        <button type="submit" 
        className="signup-btn get"
        disabled={isSubmitting} 
        onClick={handleSubmit}>{isSubmitting ? "Loading" : "Get Started"}</button> 

        </form>
    </>}
    
      </Formik>
    </React.Fragment>
  );
};
