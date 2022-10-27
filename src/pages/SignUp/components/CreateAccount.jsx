import React from "react";
import { Formik } from "formik";

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
          <label htmlFor="name">Name<span className="bi">*</span></label>
            <input
              className="signup-input"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              value= {values.name}
            />
    
          </div>

          {/* email */}
          <div class="form-wrapper">
          <label htmlFor="email">Email Address<span className="bi">*</span></label>
            <input
              className="signup-input"
              type="email"
              id="email"
              name="email"
              placeHolder="Enter your Email"
              onChange={handleChange}
              value= {values.email}
            />
          
          </div>

          {/* password */}
          <div class="form-wrapper">
          <label htmlFor="password">Password<span className="bi">*</span></label>
            <input
              className="signup-input"
              type="password"
              id="password"
              name="password"
              placeHolder="Enter your Password"
              onChange={handleChange}
              value= {values.password}
            />
           
          </div>

          {/*confirm password  */}
          <div class="form-wrapper">
          <label htmlFor="password"> Confirm Password<span className="bi">*</span></label>
            <input
              className="signup-input"
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeHolder="confirm-password"
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
