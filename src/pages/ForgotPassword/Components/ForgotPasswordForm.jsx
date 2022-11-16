import React from "react";
import { Link } from "react-router-dom";
import CyclicDesign2 from "../../SignUp/components/CyclicDesign2";
import { Formik } from "formik";
import validationSchema from "./validationForgot";
// import validationSchema from "../../ForgotPassword/components/validationForgot";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ForgotPasswordForm = () => {
  const notifySuccess = () => {

    toast.success("Reset Link has been sent to your email!", {
      position: toast.POSITION.TOP_CENTER,
    });

  };
  const notifyError = () => {

    toast.error("Email not found !", {
      position: toast.POSITION.TOP_CENTER,
    });

  };
  return (
    <section className="signup-form">
      <CyclicDesign2 />
      <section className="resetps-form">
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const { email } = values;

            setSubmitting(true);
            console.log(email);
            console.log(values);

            try {
              let response = await axios.post(
                "https://codeask-staging.herokuapp.com/v1/api/auth/forgot-password",
                {
                  email,
                }
              );
              console.log(response.data);
              notifySuccess();
            } catch (error) {
              console.log(error);
              notifyError()
            }
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
                  <label htmlFor="Email">
                    Email<span className="forgot-password-error"></span>
                  </label>
                  <input
                    className="signup-input"
                    type="email"
                    id="email"
                    name="email"
                    placeHolder="Enter your email"
                    onChange={handleChange}
                    value={values.email}
                  />

                  {errors.email && touched.email && (
                    <p className="forgot-password-error">{errors.email}</p>
                  )}
                </div>

                <button
                  type="submit"
                  id="forgot-btn"
                  // className="signup-btn get"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  // onClick=
                >
                <Link to="/reset-password"> 
                    {isSubmitting ? "Loading" :
                      "Reset Password" }
                  </Link>
                </button>

                <hr />
              </form>
            </>
          )}
        </Formik>
        <div className="signin-wrap">
          <p className="signup-brief">Return to</p>
          <span>
            <Link to={"/sign-in"}>LogIn</Link>
          </span>
        </div>
        <ToastContainer />
      </section>
    </section>
  );
};
