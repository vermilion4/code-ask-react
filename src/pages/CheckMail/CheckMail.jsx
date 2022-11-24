import React from 'react'
import SignUpImageBrief from '../../components/SignUpImageBrief'
import CyclicDesign2 from '../SignUp/components/CyclicDesign2'
import "../../stylesheets/LoginAside.css"
import "../../stylesheets/Signup.css"
import "../../stylesheets/resetpassword.css"
import "../../stylesheets/shared.css"
import "../../stylesheets/checkmail.css"
import CodeaskLogo from '../SignUp/components/CodeaskLogo'

export const CheckMail = () => {
  return (
    <div  className='checkmail-container'>
     <section className="signup-image">
        <SignUpImageBrief/>
      </section> 
        <section className="checkmail-wrapper">
            <CodeaskLogo></CodeaskLogo>
            <h2 className='checkmail-header'>Link Sent</h2>
        <p className='checkmail-text'>Kindly check your mail for Confirmation Message</p>
        <CyclicDesign2/>
    </section>
    </div>
  )
}
