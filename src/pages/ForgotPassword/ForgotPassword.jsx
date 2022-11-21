import React from 'react'
import SignUpImageBrief from '../../components/SignUpImageBrief'
import {ForgotPasswordWrapper} from "../../pages/ForgotPassword/Components/ForgotPasswordWrapper"
import CyclicDesign2 from '../SignUp/components/CyclicDesign2'
import "../../stylesheets/LoginAside.css"
import "../../stylesheets/Signup.css"
// import "../../stylesheets/forgotpassword.css"
import "../../stylesheets/shared.css"

export const ForgotPassword = () => {
  return (
    <div className="mainwrap">
     <section className="signup-image">
        <SignUpImageBrief/>
      </section>
       <section className="signupform-wrapper">
        <CyclicDesign2/>
        <ForgotPasswordWrapper />

    </section>
    </div>
  )
}
