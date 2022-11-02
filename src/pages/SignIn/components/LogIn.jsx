import React from "react";
import { Formik } from "formik";
import axios from "axios";

export const LogIn = () => {
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        
        onSubmit={async (values, { setSubmitting }) => {
          const { email, password } = values;
          setSubmitting(true);

          try {
            let response = await axios.post("auth/signin", {
              email,
              password,
            });
            console.log(response.data);
          } catch (error) {}
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <>
            <form action="">
              {/* email */}
              <div class="form-wrapper">
                <label htmlFor="email">
                  Email Address<span className="bi">*</span>
                </label>
                <input
                  className="signup-input"
                  type="email"
                  id="email"
                  name="email"
                  placeHolder="Enter your Email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email && 
                  <p className="bi">{errors.email}</p>
                }
              </div>

              {/* password */}
              <div class="form-wrapper">
                <label htmlFor="Password">
                  Password<span className="bi">*</span>
                </label>
                <input
                  className="signup-input"
                  type="password"
                  id="password"
                  name="password"
                  placeHolder="Enter your Password"
                  onChange={handleChange}
                  value={values.password}
                />

                {errors.password && touched.password && (
                  <p className="bi">{errors.password}</p>
                )}
              </div>

              <div className="login-options">
                <div className="remember">
                  <input className="checkbox" type="checkbox" id="rememberMe" />
                  <label className="remember-me" HTMLfor="rememberMe">
                    Remember me
                  </label>
                </div>
                <span className="fogotPasswordLink">
                  <a href="./forgotpassword.html">Forgot Password?</a>
                </span>
              </div>

              <button
                type="submit"
                className="signup-btn get"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? "Loading" : "Log In"}
              </button>

              <hr class="hr" />
            </form>
          </>
        )}
      </Formik>
    </React.Fragment>
  );
};
