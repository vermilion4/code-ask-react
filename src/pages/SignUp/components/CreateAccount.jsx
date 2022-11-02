import React from "react";
import { Formik } from "formik";
import validationSchema from "./validationSignUp";
import axios from "axios";
import { Link } from "react-router-dom";

export const CreateAccount = () => {
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        
        onSubmit={async (values, { setSubmitting }) => {
          const { username, email, password, confirmPassword } = values;
          setSubmitting(true);

          try {
            let response = await axios.post("auth/signup", {
              username,
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
          handleSubmit,
          handleChange,
          isSubmitting,
          /* and other goodies */
        }) => (
          <>
            <form action="">
              {/* Name */}
              <div class="form-wrapper">
                <label htmlFor="name">
                  Name<span className="bi">*</span>
                </label>

                <input
                  className="signup-input"
                  type="text"
                  id="name"
                  name="username"
                  placeholder="Enter your username"
                  onChange={handleChange}
                  value={values.name}
                />

                {errors.username && touched.username && (
                  <p className="bi"> {errors.username}</p>
                )}
              </div>

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
                {errors.email && touched.email && (
                  <p className="bi"> {errors.email}</p>
                )}
              </div>

              {/* password */}
              <div class="form-wrapper">
                <label htmlFor="password">
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
                {errors.password && touched.password ? (
                  <p className="bi"> {errors.password}</p>
                ) : null}
              </div>

              {/*confirm password  */}
              <div class="form-wrapper">
                <label htmlFor="password">
                  {" "}
                  Confirm Password<span className="bi">*</span>
                </label>
                <input
                  className="signup-input"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeHolder="confirm-password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="bi"> {errors.confirmPassword}</p>
                )}
              </div>


              <button
                type="submit"
                className="signup-btn get"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? "Loading" : "Get Started"}
                
              </button>
            </form>
          </>
        )}
      </Formik>
    </React.Fragment>
  );
};
