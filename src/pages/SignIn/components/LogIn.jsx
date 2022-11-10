import React from "react";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye} from "react-icons/fa";
import {FaEyeSlash} from "react-icons/fa";


export const LogIn = () => {

  const navigate = useNavigate();

  const [token, setToken] = useState(false);

  let localToken = JSON.parse(localStorage.getItem("token")) ;


  let tokenExists = localToken.length > 0;

useEffect(()=>{
  if ( tokenExists) {
    setToken(true)
  }
},[ tokenExists]);


const [showPassword, setShowPassword] =useState(true)

const togglePassword = ()=>{
  setShowPassword(!showPassword)
}

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

            const { access, refresh } = response.data.token;

            const tokens = [];
            tokens.push({ access: access.token });
            tokens.push({ refresh: refresh.token });

            localStorage.setItem("token", JSON.stringify(tokens));

           
            if(token){
              navigate('/questions')
            }
         
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
                  type={showPassword? "password":"text" }
                  id="password"
                  name="password"
                  placeHolder="Enter your Password"
                  onChange={handleChange}
                  value={values.password}
                />
                <span className="toggle-password"
                    onClick = {togglePassword}
                >{ showPassword ? <FaEyeSlash/> : <FaEye/>}
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
                  <Link to = "/forgot-password">
                  Forgot Password?
                  </Link>
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
