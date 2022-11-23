import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../../components/hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Loggedin = () => {
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

  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

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
            let response = await axios.post(
              "https://codeask-staging.herokuapp.com/v1/api/auth/signin",
              {
                email,
                password,
              }
            );
            const accessToken = response.data.tokens.access.token;
            const refreshToken = response.data.tokens.refresh.token;
            const userObj = response.data.user;

            setAuth({ accessToken, refreshToken });
            setUser(userObj);
            notifySuccess();

            if (auth) {
              navigate("/questions");
            }
          } catch (err) {
            if (!err.response) {
              notifyError("no server response");
            } else if (err.response.status === 400) {
              alert(err.response.message);
              notifyError(err.response.message);
            } else if (err.response.status === 401) {
              notifyError(err.response.message);
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
                  <p className="asterik">{errors.email}</p>
                )}
              </div>

              {/* password */}
              <div class="form-wrapper">
                <label htmlFor="Password">
                  Password<span className="asterik">*</span>
                </label>
                <input
                  className="signup-input"
                  type={showPassword ? "password" : "text"}
                  id="password"
                  name="password"
                  placeHolder="Enter your Password"
                  onChange={handleChange}
                  value={values.password}
                />
                <span className="toggle-password" onClick={togglePassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                {errors.password && touched.password && (
                  <p className="asterik">{errors.password}</p>
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
                  <Link to="/forgot-password">Forgot Password?</Link>
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

            <ToastContainer />
          </>
        )}
      </Formik>
    </React.Fragment>
  );
};