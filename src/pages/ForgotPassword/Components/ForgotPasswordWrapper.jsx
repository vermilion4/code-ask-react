import React from 'react'
import CodeaskLogo from '../../SignUp/components/CodeaskLogo'
import SignUpIntro from '../../SignUp/components/SignupIntro'
import { ForgotPasswordForm } from './ForgotPasswordForm'

export const ForgotPasswordWrapper = () => {
  return (
    <section class="signin">
    <CodeaskLogo/>
    {/* signupIntro comes here */}
   <SignUpIntro classname ={"signup-intro"} text={"Forgot Your Password?"} paragraph={"We'll email you instructions on how to reset it"}/>
   {/* form comes here */}

    <ForgotPasswordForm />
    </section>
  )
}
