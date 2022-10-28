import React from 'react'
import { Link } from 'react-router-dom'
import CyclicDesign2 from '../../SignUp/components/CyclicDesign2'
import { Formik } from 'formik'


export const ResetPasswordForm = () => {
  return (
    <section className="signup-form">
         <CyclicDesign2 />
        <section className="resetps-form">
        <Formik
        initialValues={{
          password: "",
        }}
        // validationSchema={validationSchema}
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
                 New Password<span className="bi">*</span>
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
                  <p className="bi">{errors.password}</p>
                )}
              </div>

              <div class="form-wrapper">
                <label htmlFor="Password">
                 Repeat Password<span className="bi">*</span>
                </label>
                <input
                  className="signup-input"
                  type="password"
                  id="password"
                  name="password"
                  placeHolder="Repeat Password"
                  onChange={handleChange}
                  value={values.password}
                />

                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="bi">{errors.confirmPassword}</p>
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
          <Link to = {'/sign-in'}>
          <span>LogIn</span>
          </Link>
          </div>
    </section>
  </section>

  )
}
