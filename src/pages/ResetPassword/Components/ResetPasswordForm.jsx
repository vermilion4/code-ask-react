import React from 'react'
import { Link } from 'react-router-dom'
import CyclicDesign2 from '../../SignUp/components/CyclicDesign2'
import { Formik } from 'formik'
import validationSchema from "../../SignUp/components/validationSignUp"


export const ResetPasswordForm = () => {
  return (
    <section className="signup-form">
         <CyclicDesign2 />
        <section className="resetps-form">
        <Formik
        initialValues={{
          password: "",
          confirmPassword: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const {password } = values;
          setSubmitting(true);

          setTimeout(() => {
            alert(
              "You have succesfully changed your password"
            );
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
             
              {/* password */}
              <div class="form-wrapper">
                <label htmlFor="Password">
                 New Password<span className="bi"></span>
                </label>
                <input
                  className="signup-input"
                  type="password"
                  id="password"
                  name="password"
                  placeHolder="Enter new Password"
                  onChange={handleChange}
                  value={values.password}
                />

                {errors.password && touched.password && (
                  <p className="password-error">{errors.password}</p>
                )}
              </div>

              <div class="form-wrapper">
                <label htmlFor="Password">
                 Repeat Password<span className="bin">*</span>
                </label>
                <input
                  className="signup-input"
                  type="password"
                  id="cpassword"
                  name="confirmPassword"
                  placeHolder="Repeat Password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                />

                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="confirm-password-error">{errors.confirmPassword}</p>
                )}
              </div>

              <button
                type="submit"
                className="signup-btn get"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? "Loading" : "Reset Password"}
              </button>

              <hr />
            </form>
          </>
        )}
      </Formik>
      <div className="signin-wrap">
          
         <p className="signup-brief">Return to</p> 
          <Link to = {'/forgot-password'}>
          <span>LogIn</span>
          </Link>
          </div>
    </section>
  </section>

  )
}
