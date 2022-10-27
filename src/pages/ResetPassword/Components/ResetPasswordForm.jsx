import React from 'react'
import { Link } from 'react-router-dom'
import CyclicDesign2 from '../../SignUp/components/CyclicDesign2'

export const ResetPasswordForm = () => {
  return (
    <section className="signup-form">
         <CyclicDesign2 />
        <section className="resetps-form">
      <form action>
        <label htmlFor="newpassword">New Password <span>*</span></label>
        <div className="input-wrap">
          <input className="resetps-input" type="password" id="newpassword" name="newpassword" placeholder="Enter new password" onkeyup="validatePassword()" />
          <i className="bi bi-eye-slash" id="togglePassword" />
          <i id="error-icon" className="fa fa-exclamation-circle" style={{display: 'none'}} />
          <i id="success-icon" className="fa fa-check" style={{display: 'none'}} />
        </div>
        <p htmlFor id="pwd-guide">minimum 8 characters</p>
        <div id="newpassword-warning" className="newpassword-warning">
          <p>Password contains at least 8 characters</p>
          <ul>
            <li>One uppercase character</li>
            <li>One numeric character</li>
            <li>One special character</li>
          </ul>
        </div>
        <label htmlFor="repnewpassword">Repeat Password <span>*</span></label>
        <div className="input-wrap">
          <input className="resetps-input" id="repnewpassword" name="repnewpassword" type="password" placeholder="Repeat password" />
          <i className="bi bi-eye-slash" id="toggleCPassword" />
          <i id="error-icon" className="fa fa-exclamation-circle" style={{display: 'none'}} />
          <i id="success-icon" className="fa fa-check" style={{display: 'none'}} />
        </div>
        <p id="rep-guide" className="repnewpassword-warning">must match new password</p>
        <p id="repnewpassword-warning" />
        <button className="resetps-btn get" type="submit">
          Reset Password
        </button>
        <hr className="hr" />
        <div classname="signin-wrap">  
          <p classname="signup-brief">Return to</p> 
          <Link to={'/sign-in'}>
          <span>Log in</span>
        </Link> 
        </div>
      </form>
    </section>
  </section>

  )
}
