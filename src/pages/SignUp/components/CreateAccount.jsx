import React from "react";
import { Formik } from "formik";
import validationSchema from "./validationSignUp";

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
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const { name, email, password, confirmPassword } = values;
          setSubmitting(true);

          setTimeout(() => {
            alert("Na better Person you be,you sabi better thing, kudos");
            setSubmitting(false);
          }, 400);
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
              {/* Name */}
              <div class="form-wrapper">
                <label htmlFor="name">
                  Name<span className="bi">*</span>
                </label>
                <input
                  className="signup-input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <p className="bi"> {errors.name}</p>
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
              <hr />

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
