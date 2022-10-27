import React from 'react'
import { ResetPasswordForm } from './ResetPasswordForm'
import CodeaskLogo from '../../SignUp/components/CodeaskLogo'
import SignUpIntro from '../../SignUp/components/SignupIntro'

export const ResetPasswordWrapper = () => {
  return (
    <section class="signin">
          <CodeaskLogo/>
          {/* signupIntro comes here */}
        <SignUpIntro classname ={"signup-intro"} text={"Reset Password"} paragraph={"Enter your new password"}/>
         {/* form comes here */}

        <ResetPasswordForm />
    </section>
  )
}
