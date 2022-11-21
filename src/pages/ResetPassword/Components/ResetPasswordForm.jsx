import React from 'react'
import { Link } from 'react-router-dom'
import CyclicDesign2 from '../../SignUp/components/CyclicDesign2'
import { Formik } from 'formik'
import validationSchema from '../../ResetPassword/Components/validationReset'
import { useState } from 'react'
import { FaEye} from "react-icons/fa";
import {FaEyeSlash} from "react-icons/fa";
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const ResetPasswordForm = () => {
  const notifySuccess = () => {

    toast.success("Your password has been changed, kindly login !", {
      position: toast.POSITION.TOP_CENTER,
    });

  };
  const notifyError = () => {

    toast.error("Token Expire!", {
      position: toast.POSITION.TOP_CENTER,
    });

  };
  const[searchParams] = useSearchParams()
  let token = searchParams.get("token")
  console.log(token)
  console.log(`https://codeask-staging.herokuapp.com/v1/api/auth/reset-password?token=${token}`)



  const [showPassword, setShowPassword]= useState(true)
  const [showConfirmPassword, setShowConfirmPassword]= useState(true)

function togglePassword(){
  setShowPassword(!showPassword)
}

function toggleConfirmPassword(){
  setShowConfirmPassword(!showConfirmPassword)
}


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
        onSubmit={async(values, { setSubmitting }) => {
          const {password } = values;
          setSubmitting(true);
          console.log(password)

          try {
            let response = await axios.post(
              `https://codeask-staging.herokuapp.com/v1/api/auth/reset-password?token=${token}`,
              {
                password
              }
            );
            notifySuccess();
            console.log(response.data)
          } catch (error) {
            notifyError();
            console.log(error)
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
                <label htmlFor="Password">
                 New Password<span className="bi"></span>
                </label>
                <input
                  className="signup-input"
                  type=   {showPassword? "password": "text" }
                  id="password"
                  name="password"
                  placeHolder="Enter new Password"
                  onChange={handleChange}
                  value={values.password}
                />
                <span className='toggle-password'
                onClick={togglePassword}>
                  {showPassword? <FaEyeSlash/>: <FaEye/>}
                </span>

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
                  type= {showConfirmPassword? "password": "text" }
                  id="cpassword"
                  name="confirmPassword"
                  placeHolder="Repeat Password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                />
                <span className='toggle-password'
                onClick={toggleConfirmPassword}>
                  {showConfirmPassword ? <FaEyeSlash/>: <FaEye/> }
                </span>
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
      <div className="signin-wrap" style={{gap:"5px"}}>
          
         <p className="signup-brief">Return to</p> 
          <Link to = {'/sign-in'} style={{color:"#002828"}}>
          <span>LogIn</span>
          </Link>
          </div>
          <ToastContainer />
    </section>
  </section>

  )
}
