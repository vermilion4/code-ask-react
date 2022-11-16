import React from "react";
import { Formik } from "formik";
import validationSchema from "./validationSignUp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../../components/hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";

export const CreateAccount2 = () => {
  const notifySuccess = () => {
    toast.success("Login Successful", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const notifyError = (error) => {
    toast.error(error, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const navigate = useNavigate();
  const { auth, setAuth, setUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
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
          const { username, email, password } = values;
          setSubmitting(true);

          try {
            let response = await axios.post(
              "https://codeask-staging.herokuapp.com/v1/api/auth/signup",
              {
                email,
                password,
                username,
              }
            );

            const accessToken = response.data.tokens.access.token;

            setAuth({ accessToken });

            setUser(response.data.user);

            notifySuccess();
            if (auth) {
              navigate("/questions");
            }
          } catch (err) {
            if (!err.response) {
              notifyError("no server response");
            } else if (err.response.status === 400) {
              notifyError(err.response.data.message);
            } else if (err.response.status === 409) {
              notifyError(err.response.data.message);
            } else if (err.response.status === 401) {
              notifyError(err.response.data.message);
            } else {
              notifyError("Login Failed");
            }
          }
          //error 409 means the info() already exists
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
                  Name<span className="asterik">*</span>
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
                  <p className="asterik"> {errors.username}</p>
                )}
              </div>

              {/* email */}
              <div class="form-wrapper">
                <label htmlFor="email">
                  Email Address<span className="asterik">*</span>
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
                  <p className="asterik"> {errors.email}</p>
                )}
              </div>

              {/* password */}
              <div class="form-wrapper">
                <label htmlFor="password">
                  Password<span className="asterik">*</span>
                </label>
                <input
                  className="signup-input"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeHolder="Enter your Password"
                  onChange={handleChange}
                  value={values.password}
                />
                <span className="toggle-password" onClick={togglePassword}>
                  {" "}
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
                {errors.password && touched.password ? (
                  <p className="asterik"> {errors.password}</p>
                ) : null}
              </div>

              {/*confirm password  */}
              <div className="form-wrapper">
                <label htmlFor="password">
                  {" "}
                  Confirm Password<span className="asterik">*</span>
                </label>
                <input
                  className="signup-input"
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeHolder="confirm-password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                />
                {/* <span></span> */}

                <span
                  className="toggle-password"
                  onClick={toggleConfirmPassword}
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </span>

                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="asterik"> {errors.confirmPassword}</p>
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
            <ToastContainer />
          </>
        )}
      </Formik>
    </React.Fragment>
  );
};
