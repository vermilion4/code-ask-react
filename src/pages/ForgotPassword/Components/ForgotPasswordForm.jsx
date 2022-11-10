import React from 'react'
import { Link } from 'react-router-dom'
import CyclicDesign2 from '../../SignUp/components/CyclicDesign2'
import { Formik } from 'formik'
import validationSchema from "../../SignUp/components/validationSignUp"

export const ForgotPasswordForm = () => {
  return (
    <section className="signup-form">
    <CyclicDesign2 />
   <section className="resetps-form">
   <Formik
   initialValues={{
     email: ""
   }}
   validationSchema={validationSchema}
   onSubmit={(values, { setSubmitting }) => {
     const {email} = values;
     setSubmitting(true);

     setTimeout(() => {
       alert(
         "Instruction has been sent to your email"
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
           <label htmlFor="Email">
            New Password<span className="forgot-password-error"></span>
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
           className="signup-btn get"
           disabled={isSubmitting}
           onClick={handleSubmit}
         >
          <Link to ="/reset-password">
          {isSubmitting ? "Loading" : "Reset Password"}
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
     <Link to = {'/sign-in'}>
     LogIn
     </Link>
     </span>
     </div>
</section>
</section>
  )
}