import React, { useContext, useEffect, useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthContext";

export const Loggedin = () => {
  const navigate = useNavigate()
    const {setAuth} = useContext(AuthContext)
 
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
            let response = await axios.post("https://codeask-staging.herokuapp.com/v1/api/auth/signin", {
                email,
                password,
              } ,
             
            //    {
            //     headers: {"Content-Type":"application/json"},
            //     withCredentials:true
            //   }
              );
              console.log(response.data)
             const accessToken = response.data.token.access.token;
             console.log(accessToken)  //optional chaining
              // const roles = response?.data?.roles;

             setAuth({email, password, accessToken})
              

          } catch (err) {
            if(!err.response){
                alert('no server response')
            }
           else if(err.response.status === 400 ){
            alert('missing username or password')
            }
            else if(err.response.status === 401 ){
                alert('Unauthorized User')
            }
            else{
                alert('Login Failed') 
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
