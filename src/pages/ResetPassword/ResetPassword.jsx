import React from 'react'
import SignUpImageBrief from '../../components/SignUpImageBrief'
import { ResetPasswordWrapper } from './Components/ResetPasswordWrapper'
import CyclicDesign2 from '../SignUp/components/CyclicDesign2'
import "../../stylesheets/LoginAside.css"
import "../../stylesheets/Signup.css"
import "../../stylesheets/resetpassword.css"
import "../../stylesheets/shared.css"


export const ResetPassword = () => {
  return (
    <div className="mainwrap">
     <section className="signup-image">
        <SignUpImageBrief/>
      </section>
       <section className="signupform-wrapper">
        <CyclicDesign2/>
        <ResetPasswordWrapper/>

    </section>
    </div>
  )
}
